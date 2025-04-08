

export type InvitationData =  {
  user: UserData;
  id: string;
  role: string;
  email: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};


export type AccessData = {
  id: string;
  name: string;
  email: string;
  user: UserData;
  role: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};


export type UserData = {
    id: string;
    full_name: string;
    email: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};