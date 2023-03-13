import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Form from "../style";
import { iFormParticipation } from "./type";
import ButtonMain from "../../../styles/buttonMain";
import { VscEdit } from "react-icons/vsc";

const schema = yup.object({
  name: yup.string().required("O nome da campanha é um campo obrigatório"),
  date: yup.date().required("A data é um campo obrigatório"),
  date_final: yup.date().required("A data final é um campo obrigatório"),
  phone: yup.string().required("O telefone é um campo obrigatório"),
  city: yup.string().required("A cidade é um campo obrigatório"),
  state: yup.string().required("O estado é um campo obrigatório"),
  address: yup.string().required("O endereço é um campo obrigatório"),
  description: yup.string().required("A descrição é um campo obrigatório"),
});

const FormParticipation = ({ post }: iFormParticipation) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: post?.title,
      date: "2022-12-01",
      date_final: "2022-12-02",
      phone: post?.phone,
      city: post?.city,
      state: post?.state,
      address: post?.address,
      description: post?.description,
    },
  });

  const uptadePost: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    console.log(data.date_final.toJSON());
  };

  return (
    <Form
      onSubmit={isDirty ? handleSubmit(uptadePost) : (e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Digíte o nome da campanha"
          {...register("name")}
        />
      </div>
      <div>
        <label htmlFor="date_initial">Data de início</label>
        <input type="date" {...register("date")} />
      </div>
      <div>
        <label htmlFor="date_final">Data de fechamento</label>
        <input type="date" {...register("date_final")} />
      </div>
      <div>
        <label htmlFor="phone">Número de Contato</label>
        <input
          type="tel"
          placeholder="Digíte o telefone principal"
          {...register("phone")}
        />
      </div>
      <div>
        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          placeholder="Digíte o nome da cidade"
          {...register("city")}
        />
      </div>
      <div>
        <label htmlFor="state">Estado</label>
        <input
          type="text"
          placeholder="Digíte o nome do estado"
          {...register("state")}
        />
      </div>
      <div>
        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          placeholder="Digíte a rua e número"
          {...register("address")}
        />
      </div>

      <div>
        <label htmlFor="description">Descrição</label>
        <textarea
          placeholder="Descreva mais o evento aqui"
          {...register("description")}
        ></textarea>
      </div>

      <div>
        <ButtonMain color="white" background="button-cancel">
          Cancelar Evento
        </ButtonMain>
        <ButtonMain
          color="white"
          background="primary-color"
          onSubmit={
            isDirty ? handleSubmit(uptadePost) : (e) => e.preventDefault()
          }
        >
        <VscEdit />
          Alterar evento
        </ButtonMain>
      </div>
    </Form>
  );
};

export default FormParticipation;
