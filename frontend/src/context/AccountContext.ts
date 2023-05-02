import createGenericContext from "../utils/createGenericContext";

export type User = {
  id: string;
  login: string;
};

type AccountContextType = {
  user: User | null;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
};

export const [useAccountContext, AccountContextProvider] =
  createGenericContext<AccountContextType>("Account");
