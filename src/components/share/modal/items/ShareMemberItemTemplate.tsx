import { QuickSearchItemTemplate } from ":/components/quick-search";
import { AccessData, InvitationData } from "../../types";
import { UserRow } from ":/components/users/rows/UserRow";
import { Button, useCunningham } from "@openfun/cunningham-react";
import {
  DropdownMenu,
  DropdownMenuOption,
  useDropdownMenu,
} from ":/components/dropdown-menu";
import { AccessRoleDropdown } from "../../access/AccessRoleDropdown";

export type ShareMemberItemProps = {
  accessData: AccessData | InvitationData;
  roles: DropdownMenuOption[];
  updateRole: (role: string) => void;
  deleteAccess: (access: AccessData) => void;
  deleteInvitation: (invitation: InvitationData) => void;
};

export const ShareMemberItem = ({
  accessData,
  roles,
  updateRole,
  deleteAccess,
  deleteInvitation,
}: ShareMemberItemProps) => {
  const { t } = useCunningham();
  const roleDropdown = useDropdownMenu();
  const menuOptions = useDropdownMenu();

  const onDelete = () => {
    if ("role" in accessData) {
      deleteAccess(accessData as AccessData);
    } else {
      deleteInvitation(accessData as InvitationData);
    }
  };

  const options = [
    {
      label: t("components.share.delete"),
      onClick: onDelete,
    },
  ];

  const handleOpenMenu = () => {
    const isOpen = menuOptions.isOpen;
    menuOptions.setIsOpen(!isOpen);
  };

  return (
    <div className="c__share-member-item">
      <QuickSearchItemTemplate
        left={
          <UserRow
            fullName={accessData.user.full_name}
            email={accessData.user.email}
            showEmail
          />
        }
        alwaysShowRight={true}
        right={
          <div className="c__share-member-item__right">
            <AccessRoleDropdown
              roles={roles}
              selectedRole={accessData.role}
              onSelect={updateRole}
              isOpen={roleDropdown.isOpen}
              onOpenChange={roleDropdown.setIsOpen}
            />
            <DropdownMenu
              options={options}
              isOpen={menuOptions.isOpen}
              onOpenChange={menuOptions.setIsOpen}
            >
              <Button
                color="primary-text"
                onClick={handleOpenMenu}
                size="medium"
                icon={<span className="material-icons toto">more_horiz</span>}
              />
            </DropdownMenu>
          </div>
        }
      />
    </div>
  );
};
