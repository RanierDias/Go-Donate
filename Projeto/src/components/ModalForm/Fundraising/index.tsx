import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Form from "../style";

const schema = yup.object({
  name: yup.string().required("O nome da campanha é obrigatório"),
});

const FormFundraising = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver
  });

  return (
    <Form>
      <div>
        <label htmlFor="teste1">Nome</label>
        <input
          type="text"
          placeholder="Digíte o nome da campanha"
          {...register("name")}
        />
      </div>
      <div>
        <label htmlFor="teste2">Data de início</label>
        <input type="date" />
      </div>
      <div>
        <label htmlFor="teste3">Data de fechamento</label>
        <input type="date" />
      </div>
      <div>
        <label htmlFor="teste">Número de Contato</label>
        <input type="tel" placeholder="Digíte o telefone principal" />
      </div>
      <div>
        <label htmlFor="teste4">Cidade</label>
        <input type="text" placeholder="Digíte o nome da cidade" />
      </div>
      <div>
        <label htmlFor="teste5">Estado</label>
        <input type="text" placeholder="Digíte o nome do estado" />
      </div>
      <div>
        <label htmlFor="teste6">Endereço</label>
        <input type="text" placeholder="Digíte a rua e número" />
      </div>

      <div>
        <label htmlFor="teste7">Descrição</label>
        <textarea placeholder="Descreva mais o evento aqui"></textarea>
      </div>
    </Form>
  );
};

export default FormFundraising;
