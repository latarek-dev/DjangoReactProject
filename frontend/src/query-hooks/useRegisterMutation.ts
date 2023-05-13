import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { upsertData } from "./utils";
import { RegisterFormType } from "../hooks/forms/useRegisterForm";

const mutationFn = (data: RegisterFormType) =>
  upsertData("post", "/Account/SignUp", data);

type UseSignUpMutationProps = {
  options: UseMutationOptions<unknown, unknown, RegisterFormType, unknown>;
};

export const useSignUpMutation = ({ options }: UseSignUpMutationProps) => {
  return useMutation({
    mutationFn,
    ...options,
  });
};