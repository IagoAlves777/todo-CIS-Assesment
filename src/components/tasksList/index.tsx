import * as C from "./styles";
import { CardTask } from "../cardTask";
import { toDoActions, useTask, KEY } from "../../contexts/todoContext";
import { useEffect, useState } from "react";
import { ModalNewTask } from "../modalNewTask";
import { CardNoTasks } from "../cardNoTasks";

export const TaskList = () => {
  const { state, dispatch } = useTask();
  const [showModalNewTask, setShowModalNewTask] = useState(false);
  const closeModal = () => {
    setShowModalNewTask(false);
  };

  return (
    <C.Container>
      <div className="content">
        <h1>SUAS TAREFAS</h1>
        {state.tasks.length ? (
          state.tasks.map((task, index) => (
            <CardTask
              id={task.id}
              title={task.title}
              description={task.description}
              date={task.date}
              check={task.check}
            />
          ))
        ) : (
          <CardNoTasks />
        )}
      </div>
      <div className="footer" onClick={() => setShowModalNewTask(true)}>
        <h2>➕ Adicionar nova tarefa</h2>
      </div>
      <ModalNewTask show={showModalNewTask} handleClose={closeModal} />
    </C.Container>
  );
};
