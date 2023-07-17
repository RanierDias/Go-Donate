import { yupResolver } from "@hookform/resolvers/yup";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { iFundraising, iPosts } from "../../../providers/@types";
import { PostContext } from "../../../providers/PostContext";
import { api } from "../../../services/api";
import ButtonMain from "../../../styles/buttonMain";
import * as yup from "yup";
import Form from "../style";
import { VscEdit } from "react-icons/vsc";
import { ModalContext } from "../../../providers/ModalContext";

const schema = yup.object({
  title: yup.string().required("O nome da campanha é um campo obrigatório"),
  date: yup.date().required("A data é um campo obrigatório"),
  time: yup.string().required("Defina um horário"),
  city: yup.string().required("A cidade é um campo obrigatório"),
  state: yup.string().required("O estado é um campo obrigatório"),
  description: yup.string().required("A descrição é um campo obrigatório"),
});

const DonationForm = () => {
  const { posts, setPosts, search, setSearch } = useContext(PostContext);
  const { setShowModal, selectedCard } = useContext(ModalContext);
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
      time: selectedCard?.time,
      city: selectedCard?.city,
      state: selectedCard?.state,
      description: selectedCard?.description,
    },
  });

  const uptadePost: SubmitHandler<FieldValues> = async (data) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const response = await api.patch<iPosts>(
        `post/${selectedCard.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newPost = posts.filter((post) => post.id != response.data.id);
      const newSearch = search.filter(
        (post: iPosts) => post.id != response.data.id
      );

      setSearch([...newSearch, response.data]);
      setPosts([...newPost, response.data]);
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

      api.delete(`post/${selectedCard.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newPost = posts.filter((post) => post.id != selectedCard.id);
      const newSearch = search.filter(
        (post: iPosts) => post.id != selectedCard.id
      );

      setSearch(newSearch);
      setPosts(newPost);
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
        userId: Number(id),
        ...data,
      };

      console.log(newData);

      const response = await api.post("post", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPosts([...posts, response.data]);
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
        <label htmlFor="date">Data</label>
        <small>{errors.date?.message?.toString()}</small>
        <input type="date" {...register("date")} />
      </div>
      <div>
        <label htmlFor="time">Horário</label>
        <small>{errors.date?.message?.toString()}</small>
        <input type="time" {...register("time")} />
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
              <VscEdit />
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

export default DonationForm;
