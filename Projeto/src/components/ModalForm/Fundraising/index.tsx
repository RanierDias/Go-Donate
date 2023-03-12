import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import Form from "../style";
import ButtonMain from "../../../styles/buttonMain";
import { useContext } from "react";
import { CompanyContext } from "../../../providers/CompanyContext";
import { api } from "../../../services/api";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { iFundraising } from "../../../providers/@types";

const schema = yup.object({
  title: yup.string().required("O nome da campanha é um campo obrigatório"),
  date: yup.date().required("A data é um campo obrigatório"),
  final_date: yup.date().required("A data final é um campo obrigatório"),
  open_time: yup.string().required("A hora de abertura é um campo obrigatório"),
  close_time: yup
    .string()
    .required("A hora de fechamento é um campo obrigatório"),
  phone: yup.string().required("O telefone é um campo obrigatório"),
  city: yup.string().required("A cidade é um campo obrigatório"),
  state: yup.string().required("O estado é um campo obrigatório"),
  address: yup.string().required("O endereço é um campo obrigatório"),
  description: yup.string().required("A descrição é um campo obrigatório"),
});

const FormFundraising = () => {
  const {
    selectedCard,
    fundraising,
    setFundraising,
    setShowModal,
    search,
    setSearch,
  } = useContext(CompanyContext);
  const regExDate = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: selectedCard?.title,
      date: selectedCard.date.match(regExDate),
      final_date: selectedCard.final_date?.match(regExDate),
      open_time: selectedCard.open_time,
      close_time: selectedCard.close_time,
      phone: selectedCard?.phone,
      city: selectedCard?.city,
      state: selectedCard?.state,
      address: selectedCard?.address,
      description: selectedCard?.description,
    },
  });

  const uptadePost: SubmitHandler<FieldValues> = async (data) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const newData = {
        ...data,
        date: data.date.toJSON(),
        final_date: data.final_date.toJSON(),
      };

      const response = await api.patch<iFundraising>(
        `fundraisings/${selectedCard.id}`,
        newData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newFundraisings = fundraising.filter(
        (post) => post.id != response.data.id
      );
      const newSearch = search.filter(
        (post: iFundraising) => post.id != response.data.id
      );

      setSearch([...newSearch, response.data]);
      setFundraising([...newFundraisings, response.data]);
      toast.success("Evento atualizado!");
      setShowModal(null);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  const deletePost = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");

      api.delete(`fundraisings/${selectedCard.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newFundraising = fundraising.filter(
        (post) => post.id != selectedCard.id
      );

      setFundraising(newFundraising);
      toast.success("Evento deletado!");
      setShowModal(null);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.status);
      } else {
        console.log(error);
      }
    }
  };

  const createPost: SubmitHandler<FieldValues> = async (data) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@UserId");
      const newData = {
        ...data,
        date: data.date.toJSON(),
        final_date: data.final_date.toJSON(),
        userId: id,
      };

      const response = await api.post("fundraisings", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFundraising([...fundraising, response.data]);
      toast.success("Evento criado com sucesso");
      setShowModal(null);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Form
      onSubmit={
        isDirty && selectedCard.title != "Criar novo evento"
          ? handleSubmit(uptadePost)
          : handleSubmit(createPost)
      }
    >
      <div>
        <label htmlFor="title">Nome</label>
        <small>{errors.title?.message?.toString()}</small>
        <input
          type="text"
          placeholder="Digíte o nome da campanha"
          {...register("title")}
        />
      </div>
      <div>
        <label htmlFor="date">Data de início</label>
        <small>{errors.date?.message?.toString()}</small>
        <input type="date" {...register("date")} />
      </div>
      <div>
        <label htmlFor="date_final">Data de fechamento</label>
        <small>{errors.final_date?.message?.toString()}</small>
        <input type="date" {...register("final_date")} />
      </div>
      <div>
        <label htmlFor="open_time">Hora de aberturar</label>
        <small>{errors.open_time?.message?.toString()}</small>
        <input type="time" {...register("open_time")} />
      </div>
      <div>
        <label htmlFor="close_time">Hora de fechamento</label>
        <small>{errors.close_time?.message?.toString()}</small>
        <input type="time" {...register("close_time")} />
      </div>
      <div>
        <label htmlFor="phone">Número de Contato</label>
        <small>{errors.phone?.message?.toString()}</small>
        <input
          type="tel"
          placeholder="Digíte o telefone principal"
          {...register("phone")}
        />
      </div>
      <div>
        <label htmlFor="city">Cidade</label>
        <small>{errors.city?.message?.toString()}</small>
        <input
          type="text"
          placeholder="Digíte o nome da cidade"
          {...register("city")}
        />
      </div>
      <div>
        <label htmlFor="state">Estado</label>
        <small>{errors.state?.message?.toString()}</small>
        <input
          type="text"
          placeholder="Digíte o nome do estado"
          {...register("state")}
        />
      </div>
      <div>
        <label htmlFor="address">Endereço</label>
        <small>{errors.address?.message?.toString()}</small>
        <input
          type="text"
          placeholder="Digíte a rua e número"
          {...register("address")}
        />
      </div>

      <div>
        <label htmlFor="description">Descrição</label>
        <small>{errors.description?.message?.toString()}</small>
        <textarea
          placeholder="Descreva mais o evento aqui"
          {...register("description")}
        ></textarea>
      </div>

      <div>
        {selectedCard.title != "Criar novo evento" ? (
          <>
            <ButtonMain
              color="white"
              background="button-cancel"
              onClick={deletePost}
            >
              Cancelar Evento
            </ButtonMain>
            <ButtonMain
              color="white"
              background="primary-color"
              onSubmit={
                isDirty ? handleSubmit(uptadePost) : (e) => e.preventDefault()
              }
              type="submit"
            >
              Alterar evento
            </ButtonMain>
          </>
        ) : (
          <>
            <ButtonMain
              color="white"
              background="button-cancel"
              onClick={() => setShowModal(null)}
            >
              Cancelar
            </ButtonMain>
            <ButtonMain onSubmit={handleSubmit(createPost)}>
              Criar evento
            </ButtonMain>
          </>
        )}
      </div>
    </Form>
  );
};

export default FormFundraising;
