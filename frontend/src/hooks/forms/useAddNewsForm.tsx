import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import {
  NewsMutationOptions,
  useAddNewsMutation,
} from "../../query-hooks/useAddNewsMutation";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  surveyId: Yup.string().required(),
  levelId: Yup.string().required(),
  date: Yup.date().required(),
  registerStartDate: Yup.string().required(),
  registerEndDate: Yup.string().required(),
  yearAndExam: Yup.string().required(),
  visible: Yup.boolean().required(),
});

export type AddNewsForm = Yup.InferType<typeof validationSchema>;

export const useAddNewsForm = ({ onSuccess }: NewsMutationOptions) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AddNewsForm>({
    resolver: yupResolver(validationSchema),
  });

  const { mutate } = useAddNewsMutation({
    onSuccess,
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return {
    register,
    reset,
    onSubmit,
    control,
    errors,
  };
};
