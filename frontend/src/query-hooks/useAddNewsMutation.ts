import { MutationOptions, useMutation } from "@tanstack/react-query";

import { upsertData } from "./utils";
import { AddNewsForm } from "../hooks/forms/useAddNewsForm";

export type NewsMutationOptions = MutationOptions<
  AddNewsForm,
  unknown,
  AddNewsForm
>;


export const useAddNewsMutation = (
  options: NewsMutationOptions,
) => {
  const mutationFn = (body: AddNewsForm) =>
    upsertData("post", "http://127.0.0.1:8000/polls/news/", body);

  return useMutation({
    mutationFn,
    ...options,
  });
};
