import { Card } from "react-bootstrap";
import * as C from "./styles";

export const CardNoTasks = () => {
  return (
    <C.Container>
      <Card>
        <h2>Nenhuma tarefa registrada... 😪</h2>
      </Card>
    </C.Container>
  );
};
