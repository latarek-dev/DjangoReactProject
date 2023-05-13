import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { upsertData } from "./utils";
import { RegisterFormType } from "../hooks/forms/useRegisterForm";

const mutationFn = (data: RegisterFormType) =>
  upsertData("post", "http://127.0.0.1:8000/polls/register/", data);

type UseSignUpMutationProps = {
  options: UseMutationOptions<unknown, unknown, RegisterFormType, unknown>;
};

export const useRegisterMutation = ({ options }: UseSignUpMutationProps) => {
  return useMutation({
    mutationFn,
    ...options,
  });
};