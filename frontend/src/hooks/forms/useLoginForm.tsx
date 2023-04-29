import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform";

const validationSchema = Yup.object({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

export type LoginForm = Yup.InferType<typeof validationSchema>;

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  return { register, handleSubmit, errors };
};
