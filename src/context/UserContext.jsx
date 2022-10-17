import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
export const AuthContext = createContext({});

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      await api
        .post(`/sessions/`, data)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            window.localStorage.clear();
            setUser(response.data.user);
            window.localStorage.setItem(
              "@kenzieHub:token",
              response.data.token
            );
            window.localStorage.setItem(
              "@kenzieHub:userId",
              response.data.user.id
            );
            toast.success("Login realizado com sucesso!", "Show now");
            setTimeout(() => {
              setIsAuthenticated(true);
            }, 700);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("Algo deu errado, tente novamente!", "Show now");
        });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    function authenticated() {
      const token = window.localStorage.getItem("@kenzieHub:token");
      token && isAuthenticated && navigate(`/dashboard`);
    }
    authenticated();
  }, [isAuthenticated]);

  function handleForm() {
    navigate("/register");
  }

  function handleFormDashboard() {
    setIsAuthenticated(false);
    window.localStorage.clear();
    setUser([]);
    navigate("/");
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzieHub:token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
          window.localStorage.clear();
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  async function registerUser(data) {
    try {
      await api
        .post(`/users/`, data)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Conta criada com sucesso", "Show now");
            setTimeout(() => {
              navigate("/");
            }, 800);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("Ops! Algo deu errado.", "Show now");
        });
    } catch (error) {
      console.error(error);
    }
  }

  function handleFormRegister() {
    navigate("/");
  }

  async function submitTech(data) {
    const token = localStorage.getItem("@kenzieHub:token");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api
        .post("/users/techs", data)
        .then(async (response) => {
          if (response.status === 201) {
            toast.success("Tecnologia criada com sucesso", "Show now");
            const { data } = await api.get("/profile");
            setUser(data);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error(
            "Usuário já tem tecnologia criada",
            "Show now"
          );
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTech(id) {
    const token = localStorage.getItem("@kenzieHub:token");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api
        .delete(`/users/techs/${id}`)
        .then(async () => {
          toast.success("Tecnologia deletada com sucesso", "Show now");
          const { data } = await api.get("/profile");
          setUser(data);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Algo deu errado :(, tente novamente!", "Show now");
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        onSubmit,
        handleForm,
        isAuthenticated,
        handleFormDashboard,
        user,
        loading,
        registerUser,
        handleFormRegister,
        submitTech,
        deleteTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
