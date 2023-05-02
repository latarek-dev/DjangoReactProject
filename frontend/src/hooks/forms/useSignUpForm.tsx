import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object({
  login: Yup.string().required(),
  password: Yup.string().required(),
  repeatPassword: Yup.string().required(),
});

export type SignUpFormType = Yup.InferType<typeof validationSchema>;

export const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  return { register, handleSubmit, errors };
};
