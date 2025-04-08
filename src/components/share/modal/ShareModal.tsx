import { DropdownMenuOption } from ":/components/dropdown-menu";
import { InvitationUserSelectorList } from "../InvitationUserSelectorList";
import {
  useState,
  useRef,
  useMemo,
  PropsWithChildren,
  ReactNode,
  useCallback,
} from "react";
import {
  Button,
  Modal,
  ModalSize,
  useCunningham,
} from "@openfun/cunningham-react";
import {
  QuickSearch,
  QuickSearchData,
  QuickSearchGroup,
} from ":/components/quick-search";
import { SearchUserItem } from "./items/SearchUserItem";
import { InvitationData, UserData } from ":/components/share/types.ts";
import { ShareMemberItem } from "./items/ShareMemberItem";
import { ShareInvitationItem } from "./items/ShareInvitationItem";
import { useResponsive } from ":/hooks/useResponsive";

export type ShareModalProps<UserType extends UserData> = {
  isOpen: boolean;
  onClose: () => void;
  searchUsersResult?: UserType[];
  modalTitle?: string;
  searchPlaceholder?: string;
  members?: UserType[];
  invitations?: InvitationData[];
  hasNextMembers?: boolean;
  onLoadNextMembers?: () => void;
  onDeleteInvitation?: (invitation: InvitationData) => void;
  onUpdateInvitation?: (invitation: InvitationData, role: string) => void;
  hasNextInvitations?: boolean;
  onLoadNextInvitations?: () => void;
  onDeleteAccess?: (access: UserType) => void;
  onUpdateAccess?: (access: UserType, role: string) => void;
  outsideSearchContent?: ReactNode;
  onSearchUsers: (search: string) => void;
  onInviteUser: (users: UserType[], role: string) => void;
  invitationRoles: DropdownMenuOption[];
};

export const ShareModal = <UserType extends UserData>({
  searchUsersResult,
  children,
  outsideSearchContent,
  members = [],
  invitations = [],
  hasNextMembers = false,
  hasNextInvitations = false,
  ...props
}: PropsWithChildren<ShareModalProps<UserType>>) => {
  const { t } = useCunningham();
  const { isMobile } = useResponsive();
  const searchUserTimeoutRef = useRef<number>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pendingInvitationUsers, setPendingInvitationUsers] = useState<
    UserType[]
  >([]);
  const [selectedInvitationRole, setSelectedInvitationRole] = useState<string>(
    props.invitationRoles[0].value ?? ""
  );

  const modalContentHeight = !isMobile
    ? "min(690px, calc(100dvh - 2em - 12px - 44px))" // 100dvh - 2em - 12px  is the max cunningham modal height.  690px is the height of the content in desktop ad 34px is the height of the modal title in mobile
    : `calc(100dvh - 32px)`;

  const onSearchUser = (search: string) => {
    if (searchUserTimeoutRef.current) {
      clearTimeout(searchUserTimeoutRef.current);
    }

    if (search === "") {
      setSearchQuery("");
      props.onSearchUsers("");
      return;
    }

    searchUserTimeoutRef.current = setTimeout(() => {
      props.onSearchUsers(search);
      setSearchQuery(search);
    }, 300);
  };

  const onInputChange = (str: string) => {
    setInputValue(str);
    onSearchUser(str);
  };

  const showSearchUsers =
    searchQuery !== "" || pendingInvitationUsers.length > 0;

  const onSelect = useCallback(
    (user: UserType) => {
      setPendingInvitationUsers((prev) => [...prev, user]);
      setInputValue("");
      setSearchQuery("");
      props.onSearchUsers("");
    },
    [props]
  );

  const onRemoveUser = (user: UserType) => {
    setPendingInvitationUsers((prev) => prev.filter((u) => u.id !== user.id));
  };

  const usersData: QuickSearchData<UserType> = useMemo(() => {
    const members = searchUsersResult?.filter(
      (user) => !pendingInvitationUsers.includes(user)
    );

    const isValidEmail = (email: string) => {
      return !!email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/
      );
    };

    const isEmail = isValidEmail(searchQuery ?? "");
    const hasEmailInUsers = members?.some((user) => user.email === searchQuery);

    const newUser = {
      id: searchQuery,
      full_name: "",
      email: searchQuery,
    };

    const group: QuickSearchData<UserType> = {
      groupName: t("components.share.search.group_name"),
      elements: members ?? [],
      showWhenEmpty: true,
      emptyString:
        searchQuery !== ""
          ? t("components.share.user.no_result")
          : t("components.share.user.placeholder"),
      endActions:
        isEmail && !hasEmailInUsers
          ? [
              {
                content: <SearchUserItem user={newUser} />,
                onSelect: () => void onSelect(newUser as UserType),
              },
            ]
          : undefined,
    };
    return group;
  }, [searchUsersResult, searchQuery, t, pendingInvitationUsers, onSelect]);

  const [listHeight, setListHeight] = useState<string>("400px");
  const selectedUsersRef = useRef<HTMLDivElement>(null);
  const handleRef = (node: HTMLDivElement) => {
    const inputHeight = 70;

    const footerHeight = node?.clientHeight ?? 0;
    const selectedUsersHeight = selectedUsersRef.current?.clientHeight ?? 0;
    const height = `calc(${modalContentHeight} - ${footerHeight}px - ${selectedUsersHeight}px - ${inputHeight}px - 10px )`;

    setListHeight(height);
  };
  return (
    <Modal
      title={props.modalTitle ?? t("components.share.modalTitle")}
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={isMobile ? ModalSize.FULL : ModalSize.LARGE}
    >
      <div style={{ height: modalContentHeight }}>
        {pendingInvitationUsers.length > 0 && (
          <div style={{ padding: "10px" }} ref={selectedUsersRef}>
            <InvitationUserSelectorList
              users={pendingInvitationUsers}
              onRemoveUser={onRemoveUser}
              roles={props.invitationRoles}
              selectedRole={selectedInvitationRole}
              onSelectRole={setSelectedInvitationRole}
              onShare={() => {
                props.onInviteUser(
                  pendingInvitationUsers,
                  selectedInvitationRole
                );
                setPendingInvitationUsers([]);
              }}
            />
          </div>
        )}
        <QuickSearch
          onFilter={onInputChange}
          inputValue={inputValue}
          loading={false}
          placeholder={t("components.share.user.placeholder")}
        >
          <div
            style={{
              height: listHeight,
              overflowY: "auto",
              paddingTop: "10px",
            }}
          >
            {showSearchUsers && (
              <div className="c__share-modal__search-users">
                <QuickSearchGroup
                  group={usersData}
                  onSelect={(user) => {
                    onSelect(user);
                  }}
                  renderElement={(user) => <SearchUserItem user={user} />}
                />
              </div>
            )}

            {!showSearchUsers && children}

            {!showSearchUsers && (
              <div className="c__share-modal__invitations">
                <span className="c__share-modal__invitations-title">
                  {t("components.share.invitations.title")}
                </span>
                {invitations.map((invitation) => (
                  <ShareInvitationItem
                    key={invitation.id}
                    invitation={invitation}
                    roles={props.invitationRoles}
                    updateRole={props.onUpdateInvitation}
                    deleteInvitation={props.onDeleteInvitation}
                  />
                ))}
                <ShowMoreButton
                  show={hasNextInvitations}
                  onShowMore={props.onLoadNextInvitations}
                />
              </div>
            )}

            {!showSearchUsers && (
              <div className="c__share-modal__members">
                <span className="c__share-modal__members-title">
                  {t(
                    members.length > 1
                      ? "components.share.members.title_plural"
                      : "components.share.members.title_singular",
                    {
                      count: members.length,
                    }
                  )}
                </span>
                {members.map((member) => (
                  <ShareMemberItem
                    key={member.id}
                    accessData={member}
                    roles={props.invitationRoles}
                    updateRole={props.onUpdateAccess}
                    deleteAccess={props.onDeleteAccess}
                  />
                ))}
                <ShowMoreButton
                  show={hasNextMembers}
                  onShowMore={props.onLoadNextMembers}
                />
              </div>
            )}
          </div>
        </QuickSearch>

        <div ref={handleRef}>
          {!showSearchUsers && <>{outsideSearchContent}</>}
        </div>
      </div>
    </Modal>
  );
};

type ShowMoreButtonProps = {
  show: boolean;
  onShowMore?: () => void;
};

const ShowMoreButton = ({ show, onShowMore }: ShowMoreButtonProps) => {
  const { t } = useCunningham();
  if (!show) return null;
  return (
    <div className="c__share-modal__show-more-button">
      <Button
        color="primary-text"
        size="small"
        icon={<span className="material-icons">arrow_downward</span>}
        onClick={onShowMore}
      >
        {t("components.share.members.load_more")}
      </Button>
    </div>
  );
};
