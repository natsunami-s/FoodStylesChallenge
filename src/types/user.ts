export type User = {
  id: string;
  email: string;
  name: string;
  facebookId: string | null;
  googleId: string | null;
  appleId: string | null;
};

export type UserData = {
  user: User;
  accessToken: string;
  refreshToken: string;
};
