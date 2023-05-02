import { useMutation } from "@tanstack/react-query";

import { useAccountContext, User } from "../context/AccountContext";
import { LoginFormType } from "../hooks/forms/useLoginForm"

import { upsertData } from "./utils";

export const useLoginQuery = () => {

  const { login } = useAccountContext();

  return useMutation({
    mutationFn: (body: LoginFormType) =>
      upsertData("post", "/authenticate", body),
    onSuccess: (data: User) => login(data),
  });
};
