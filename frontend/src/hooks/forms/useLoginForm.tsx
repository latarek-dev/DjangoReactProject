import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object({
  login: Yup.string().required(),
  password: Yup.string().required(),
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
