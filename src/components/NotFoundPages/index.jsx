import { Container } from "./styles";
import { ReactComponent as NotFound } from "./notFound.svg";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigation = useNavigate();

  function handlePage() {
    navigation("/");
  }

  return (
    <Container>
      <div>
        <NotFound />
        <h2>Que pena! Página não encontrada.</h2>
        <button type="button" onClick={handlePage}>
          Volte para a página principal
        </button>
      </div>
    </Container>
  );
}

export default NotFoundPage;
