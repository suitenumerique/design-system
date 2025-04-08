import { DropdownMenu, DropdownMenuOption } from "@gouvfr-lasuite/ui-kit";

type AccessRoleDropdownProps = {
  selectedRole: string;
  roles: DropdownMenuOption[];
  onSelect: (role: string) => void;
  canUpdate?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export const AccessRoleDropdown = ({
  roles,
  onSelect,
  canUpdate = true,
  selectedRole,
  isOpen,
  onOpenChange,
}: AccessRoleDropdownProps) => {
  const currentRoleString = roles.find((role) => role.value === selectedRole);

  if (!canUpdate) {
    return (
      <span className="fs-s clr-greyscale-600">{currentRoleString?.label}</span>
    );
  }
  return (
    <DropdownMenu
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      options={roles}
      selectedValues={[selectedRole]}
      onSelectValue={onSelect}
    >
      <div
        role="button"
        className="c__access-role-dropdown"
        onClick={() => onOpenChange?.(true)}
      >
        <span className="fs-s clr-greyscale-600">
          {currentRoleString?.label}
        </span>
        <span className="material-icons">
          {isOpen ? "arrow_drop_up" : "arrow_drop_down"}
        </span>
      </div>
    </DropdownMenu>
  );
};
