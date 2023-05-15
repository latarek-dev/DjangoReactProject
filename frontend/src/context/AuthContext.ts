import createGenericContext from "../utils/createGenericContext";

export type User = {
  id: string;
  username: string;
  email: string;
  created_at: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
};

export const [useAuthContext, AuthContextProvider] =
  createGenericContext<AuthContextType>("Auth");
