import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const requiredMessage = "This field is required";

const validationSchema = Yup.object({
  name: Yup.string().required(requiredMessage),
  login: Yup.string().required(requiredMessage),
  password: Yup.string().required(requiredMessage),
  repeatPassword: Yup.string().required(requiredMessage),
});

export type RegisterFormType = Yup.InferType<typeof validationSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  return { register, handleSubmit, errors };
};
