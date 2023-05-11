import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { requiredMessage } from "./useRegisterForm";

const validationSchema = Yup.object({
  login: Yup.string().required(requiredMessage),
  password: Yup.string().required(requiredMessage),
});

export type LoginFormType = Yup.InferType<typeof validationSchema>;

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  return { register, handleSubmit, errors };
};
