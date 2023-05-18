import { MutationOptions, useMutation } from "@tanstack/react-query";

import { deleteData } from "./utils";

export const useDeleteNewsMutation = (
  options?: MutationOptions<unknown, unknown, string>
) =>
  useMutation({
    mutationFn: id => deleteData(`http://127.0.0.1:8000/polls/news/${id}`),
    ...options,
  });
