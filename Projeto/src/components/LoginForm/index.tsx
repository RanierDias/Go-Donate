import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ILoginFormValues } from "../../providers/UserContext/@Types";
import { UserContext } from "../../providers/UserContext/UserContextInitial";
import Input from "../Input";
import * as S from "./style";

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const { register, handleSubmit } = useForm<ILoginFormValues>();

  return (
    <S.MainContainerLogin>
      <section>
        <img src="/src/assets/imgregister.svg" alt="" />
      </section>

      <S.ContainerSideForm>
        <img src="/src/assets/Logo.svg" alt="" />
        <h2>Login</h2>
        <S.FormLogin onSubmit={handleSubmit(userLogin)}>
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

          <S.ButtonLogin type="submit">Cadastrar</S.ButtonLogin>

          <S.LinkCreateAccount to="/register">Criar Conta</S.LinkCreateAccount>
        </S.FormLogin>
      </S.ContainerSideForm>
    </S.MainContainerLogin>
  );
};

export default LoginForm;
