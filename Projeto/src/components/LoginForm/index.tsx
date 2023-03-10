import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ILoginFormValues } from "../../providers/UserContext/@Types";
import { UserContext } from "../../providers/UserContext/UserContextInitial";

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>();

  return <div>LoginForm</div>;
};

export default LoginForm;
