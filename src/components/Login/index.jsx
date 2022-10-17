import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Loading } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const formSchema = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .required("Senha é obrigatória"),
});

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { onSubmit, handleForm, isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <Loading>
          <div>
            <p></p>
          </div>
        </Loading>
      ) : (
        <Container>
          <section>
            <h1>Kenzie Hub</h1>
            <main>
              <h2>Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="user">Email</label>
                <input
                  id="user"
                  placeholder="Digite seu email"
                  {...register("email")}
                />
                {errors.email?.message}
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Sua senha"
                  {...register("password")}
                />
                {errors.password?.message}
                <button type="submit">Entrar</button>
              </form>
              <div>
                <span>Ainda não possui uma conta?</span>
                <button onClick={handleForm} type="button">
                  Cadastre-se
                </button>
              </div>
            </main>
            <ToastContainer position="top-center" autoClose={700} />
          </section>
        </Container>
      )}
    </>
  );
}

export default LoginPage;
