import { useMutation } from "@tanstack/react-query";


import { LoginFormType } from "../hooks/forms/useLoginForm"

import { upsertData } from "./utils";
import { User, useAuthContext } from "../context/AuthContext";

export const useLoginQuery = () => {

  const { login } = useAuthContext();

  return useMutation({
    mutationFn: (body: LoginFormType) =>
      upsertData("post", "http://127.0.0.1:8000/polls/login/", body),
    onSuccess: (data: User) => login(data),
  });
};