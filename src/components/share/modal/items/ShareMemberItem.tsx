import { QuickSearchItemTemplate } from ":/components/quick-search";
import { AccessData } from "../../types";
import { UserRow } from ":/components/users/rows/UserRow";
import { Button, useCunningham } from "@openfun/cunningham-react";
import {
  DropdownMenu,
  DropdownMenuOption,
  useDropdownMenu,
} from ":/components/dropdown-menu";
import { AccessRoleDropdown } from "../../access/AccessRoleDropdown";

export type ShareMemberItemProps = {
  accessData: AccessData;
  roles: DropdownMenuOption[];
  updateRole?: (access: AccessData, role: string) => void;
  deleteAccess?: (access: AccessData) => void;
};

export const ShareMemberItem = ({
  accessData,
  roles,
  updateRole,
  deleteAccess,
}: ShareMemberItemProps) => {
  const { t } = useCunningham();
  const roleDropdown = useDropdownMenu();
  const menuOptions = useDropdownMenu();
  const options: DropdownMenuOption[] = [
    {
      label: t("components.share.access.delete"),
      icon: <span className="material-icons">back_hand</span>,
      callback: () => {
        deleteAccess?.(accessData);
      },
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
              onSelect={(role) => updateRole?.(accessData, role)}
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
