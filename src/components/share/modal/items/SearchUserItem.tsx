import { QuickSearchItemTemplate } from "@gouvfr-lasuite/ui-kit";

import { UserRow } from ":/components/users/rows/UserRow";
import { useCunningham } from "@openfun/cunningham-react";
import { UserData } from ":/components/share/types.ts";

type SearchUserItemProps = {
  user: UserData;
};

export const SearchUserItem = ({ user }: SearchUserItemProps) => {
  const { t } = useCunningham();

  return (
    <QuickSearchItemTemplate
      left={<UserRow fullName={user.full_name} email={user.email} />}
      alwaysShowRight={false}
      right={
        <div className="c__search-user-item-right">
          <span>{t("components.share.item.add")}</span>
          <span className="material-icons">add</span>
        </div>
      }
    />
  );
};
