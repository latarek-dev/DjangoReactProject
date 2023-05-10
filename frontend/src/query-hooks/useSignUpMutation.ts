import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { upsertData } from "./utils";
import { SignUpFormType } from "../hooks/forms/useSignUpForm";

const mutationFn = (data: SignUpFormType) =>
  upsertData("post", "/Account/SignUp", data);

type UseSignUpMutationProps = {
  options: UseMutationOptions<unknown, unknown, SignUpFormType, unknown>;
};

export const useSignUpMutation = ({ options }: UseSignUpMutationProps) => {
  return useMutation({
    mutationFn,
    ...options,
  });
};
