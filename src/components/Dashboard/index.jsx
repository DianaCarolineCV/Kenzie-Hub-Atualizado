import { useContext, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import AddModal from "../Modal";
import { Container } from "./styles";
import { BsTrash, BsEmojiSmile } from "react-icons/bs";
import { ToastContainer } from "react-toastify";

function DashboardPage() {
  const { handleFormDashboard, user, deleteTech } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  return (
    <>
      <Container>
        {modal && <AddModal setModal={setModal} />}
        <header>
          <h1>Kenzie Hub</h1>
          <button onClick={handleFormDashboard} type="button">
            Sair
          </button>
        </header>
        <main>
          <div>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
          </div>
          <div className="mainTech">
            <h2>Tecnologias </h2>
            <span onClick={() => setModal(true)}>+</span>
          </div>
          <ul>
            {!user.techs.length ? (
              <p>
                Lista vazia <BsEmojiSmile />
              </p>
            ) : (
              user.techs.map((element) => (
                <li key={element.id}>
                  <h2>{element.title}</h2>
                  <section>
                    <h4>{element.status}</h4>
                    <button
                      onClick={() => deleteTech(element.id)}
                      type="button"
                    >
                      <BsTrash size={24} />
                    </button>
                  </section>
                </li>
              ))
            )}
          </ul>
        </main>
      </Container>
      <ToastContainer position="top-center" autoClose={700} />
    </>
  );
}

export default DashboardPage;
