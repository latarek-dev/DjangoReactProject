import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "../../query-hooks/useRegisterMutation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const requiredMessage = "This field is required";

const validationSchema = Yup.object({
  username: Yup.string().required(requiredMessage),
  email: Yup.string().required(requiredMessage),
  password: Yup.string().required(requiredMessage),
  confirm_password: Yup.string().required(requiredMessage),
});

export type RegisterFormType = Yup.InferType<typeof validationSchema>;

export const useRegisterForm = () => {
  const navigate = useNavigate();

  const { mutate } = useRegisterMutation({
    options: {
      onSuccess: () => {
        toast.success("Stworzono użytkownika", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: false,
        });
        navigate("/login");
      },
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => mutate(data));

  return { register, onSubmit, errors };
};
