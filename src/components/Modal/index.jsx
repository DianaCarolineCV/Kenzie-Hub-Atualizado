import { Modal } from "./styles";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/UserContext";

const formSchema = yup.object().shape({
  title: yup.string().required("Nome é obrigatório"),
  status: yup.string().required("Status obrigatório"),
});

function AddModal({ setModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const [name, setName] = useState("");
  const { submitTech } = useContext(AuthContext);

  return (
    <Modal>
      <div className="overlay">
        <div className="content">
          <div>
            <h2>Cadastrar Tecnologia</h2>
            <button type="button" onClick={() => setModal(false)}>
              <MdClose size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit(submitTech)}>
            <label htmlFor="title">Nome</label>
            <input
              id="title"
              placeholder="Digite o nome da tecnologia"
              {...register("title")}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {errors.title?.message}
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            {errors.status?.message}
            <button type="submit" onClick={() => setName("")}>
              Cadastrar tecnologia
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default AddModal;
