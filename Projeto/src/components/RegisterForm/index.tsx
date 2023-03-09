import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { IRegisterFormValues } from "../../providers/UserContext/@Types";
import { UserContext } from "../../providers/UserContext/UserContextInitial";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),

  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email digitado é invalido"),

  password: yup
    .string()
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),

  confirmpassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
});

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: yupResolver(schema),
  });

  const handleRegister: SubmitHandler<IRegisterFormValues> = (data) => {
    userRegister(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <Input
        type="text"
        placeholder="Nome"
        {...register("name")}
        leftIcon={<FiUser />}
      />

      <Input
        type="email"
        placeholder="Email"
        {...register("email")}
        leftIcon={<FiMail />}
      />
      <Input
        type="password"
        placeholder="Senha"
        {...register("password")}
        leftIcon={<FiLock />}
      />

      <Input
        type="password"
        placeholder="Senha"
        {...register("confirmpassword")}
        leftIcon={<FiLock />}
      />
    </form>
  );
};

export default RegisterForm;
