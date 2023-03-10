import ButtonMain from "../../../styles/buttonMain"

function DonationForm() {
  return (
    <form>
      <div>
        <label htmlFor="teste1">Nome</label>
        <input type="text" placeholder="Digíte o nome da campanha" />
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

      <div>
        <ButtonMain>Excluir</ButtonMain>
        <ButtonMain>Adicionar</ButtonMain>
      </div>
    </form>
  )
}

export default DonationForm