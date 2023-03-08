import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { IRegisterFormValues } from "../../providers/UserContext/@Types";
import { UserContext } from "../../providers/UserContext/UserContextInitial";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({});

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
    <form>
      <Input name="name" type="text" placeholder="Nome" leftIcon={<FiUser />} />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        leftIcon={<FiMail />}
      />
      <Input
        name="password"
        type="password"
        placeholder="Senha"
        leftIcon={<FiLock />}
      />
    </form>
  );
};

export default RegisterForm;
