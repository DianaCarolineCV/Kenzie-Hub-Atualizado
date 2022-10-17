import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./styles";
import { AuthContext } from "../../context/UserContext";
import { useContext } from "react";

const formSchema = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "A confirmação de senha deve ser igual a senha anterior."
    ),
  name: yup.string().required("Nome é obrigatório"),
  bio: yup.string().required("Bio é obrigatório"),
  contact: yup.string().required("Contato é obrigatório"),
  course_module: yup.string().required("Modulo é obrigatório"),
});

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { registerUser, handleFormRegister } = useContext(AuthContext);

  return (
    <>
      <Container>
        <section>
          <header className="header">
            <h1>Kenzie Hub</h1>
            <button onClick={handleFormRegister} type="button">
              Voltar
            </button>
          </header>
          <main>
            <h2>Crie sua conta</h2>
            <span>Rápido e grátis, vamos nessa!</span>

            <form onSubmit={handleSubmit(registerUser)}>
              <label htmlFor="user">Nome</label>
              <input
                id="user"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              {errors.name?.message}

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              {errors.email?.message}

              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              {errors.password?.message}

              <label htmlFor="confirmPassword">Confirmar senha</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword?.message}

              <label htmlFor="bio">Bio</label>
              <input
                id="bio"
                placeholder="Fale sobre você"
                {...register("bio")}
              />
              {errors.bio?.message}

              <label htmlFor="contact">Contato</label>
              <input
                id="contact"
                placeholder="Opção de contato"
                {...register("contact")}
              />
              {errors.contact?.message}

              <label htmlFor="module">Selecionar módulo</label>
              <select id="module" {...register("course_module")}>
                <option>Primeiro módulo (Introdução ao Frontend)</option>
                <option>Segundo módulo (Frontend Avançado)</option>
                <option>Terceiro módulo (Introdução ao Backend)</option>
              </select>
              {errors.course_module?.message}
              <button type="submit">Cadastrar</button>
              <ToastContainer position="top-center" autoClose={1000} />
            </form>
          </main>
        </section>
      </Container>
    </>
  );
}

export default RegistrationPage;
