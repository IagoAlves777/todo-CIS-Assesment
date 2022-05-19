import * as C from "./styles";
import { Button, Card, Form } from "react-bootstrap";
import { CardTask } from "../cardTask";
import { useTask } from "../../contexts/todoContext";
import { useState } from "react";
import { ModalNewTask } from "../modalNewTask";

export const TaskList = () => {
  const { state, dispatch } = useTask();
  const [showModalNewTask, setShowModalNewTask] = useState(false);
  const closeModal = () => {
    setShowModalNewTask(false);
  };

  return (
    <C.Container>
      <h1>SUAS TAREFAS</h1>
      {state.tasks.map((task, index) => (
        <CardTask
          id={task.id}
          title={task.title}
          description={task.description}
          check={task.check}
        />
      ))}
      <div className="footer" onClick={() => setShowModalNewTask(true)}>
        <h2>➕ Adicionar nova tarefa</h2>
      </div>
      <ModalNewTask
        edit={false}
        show={showModalNewTask}
        handleClose={closeModal}
        title={""}
        description={""}
      />
    </C.Container>
  );
};
