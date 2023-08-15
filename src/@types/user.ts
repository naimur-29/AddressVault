export type UserContext = {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NewUserData = {
  uid: string;
  username: string;
  photoUrl: string;
};
