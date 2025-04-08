import { Button, useCunningham } from "@openfun/cunningham-react";
import { ReactNode, useState } from "react";
import { DropdownMenuOption } from "../dropdown-menu";
import { AccessRoleDropdown } from "./access/AccessRoleDropdown";
import { UserData } from ":/components/share/types.ts";

export type AddShareUserListProps<UserType extends UserData> = {
  users: UserType[];
  onRemoveUser: (user: UserType) => void;
  rightActions?: ReactNode;
  onShare: () => void;
  roles: DropdownMenuOption[];
  selectedRole: string;
  shareButtonLabel?: string;
  onSelectRole: (role: string) => void;
};

export const InvitationUserSelectorList = <UserType extends UserData>({
  users,
  onRemoveUser,
  rightActions,
  onShare,
  shareButtonLabel,
  roles,
  selectedRole,
  onSelectRole,
}: AddShareUserListProps<UserType>) => {
  const { t } = useCunningham();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="c__add-share-user-list">
      <div className="c__add-share-user-list__items">
        {users.map((user) => (
          <InvitationUserSelectorItem
            key={user.id}
            user={user}
            onRemoveUser={onRemoveUser}
          />
        ))}
      </div>
      <div className="c__add-share-user-list__right-actions">
        {rightActions}
        <AccessRoleDropdown
          roles={roles}
          selectedRole={selectedRole}
          onSelect={onSelectRole}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
        />
        <Button onClick={onShare}>
          {shareButtonLabel ?? t("components.share.shareButton")}
        </Button>
      </div>
    </div>
  );
};

export type ShareSelectedUserItemProps<UserType extends UserData> = {
  user: UserType;
  onRemoveUser: (user: UserType) => void;
};

export const InvitationUserSelectorItem = <UserType extends UserData>({
  user,
  onRemoveUser,
}: ShareSelectedUserItemProps<UserType>) => {
  return (
    <div className="c__add-share-user-item">
      <span>{user.full_name || user.email}</span>
      <Button
        color="tertiary-text"
        size="nano"
        onClick={() => onRemoveUser?.(user)}
        icon={<span className="material-icons">close</span>}
      />
    </div>
  );
};
