import { QuickSearchItemTemplate } from ":/components/quick-search";
import { InvitationData } from "../../types";
import { UserRow } from ":/components/users/rows/UserRow";
import { Button, useCunningham } from "@openfun/cunningham-react";
import {
  DropdownMenu,
  DropdownMenuOption,
  useDropdownMenu,
} from ":/components/dropdown-menu";
import { AccessRoleDropdown } from "../../access/AccessRoleDropdown";

export type ShareInvitationItemProps = {
  invitation: InvitationData;
  roles: DropdownMenuOption[];
  updateRole?: (invitation: InvitationData, role: string) => void;
  deleteInvitation?: (invitation: InvitationData) => void;
};

export const ShareInvitationItem = ({
  invitation,
  roles,
  updateRole,
  deleteInvitation,
}: ShareInvitationItemProps) => {
  const { t } = useCunningham();
  const roleDropdown = useDropdownMenu();
  const menuOptions = useDropdownMenu();
  const options: DropdownMenuOption[] = [
    {
      label: t("components.share.access.delete"),
      callback: () => deleteInvitation?.(invitation),
    },
  ];

  const handleOpenMenu = () => {
    const isOpen = menuOptions.isOpen;

    menuOptions.setIsOpen(!isOpen);
  };

  return (
    <div className="c__share-member-item">
      <QuickSearchItemTemplate
        left={<UserRow fullName="" email={invitation.email} showEmail={true} />}
        alwaysShowRight={true}
        right={
          <div className="c__share-member-item__right">
            <AccessRoleDropdown
              roles={roles}
              selectedRole={invitation.role}
              onSelect={(role) => updateRole?.(invitation, role)}
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
                size="small"
                icon={<span className="material-icons toto">more_horiz</span>}
              />
            </DropdownMenu>
          </div>
        }
      />
    </div>
  );
};
