export type SearchUserInviteItemProps = {
  email: string;
};

export const SearchUserInviteItem = ({ email }: SearchUserInviteItemProps) => {
  return <div>{email}</div>;
};
