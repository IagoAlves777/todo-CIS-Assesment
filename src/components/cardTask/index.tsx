import * as C from "./styles";
import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import { toDoActions, useTask } from "../../contexts/todoContext";
import { ModalEditTask } from "../modalEditTask";
import { KEY } from "../../contexts/todoContext";

type Props = {
  id: number;
  title: string;
  description: string;
  check: boolean;
};

export const CardTask = ({ id, title, description, check }: Props) => {
  const { state, dispatch } = useTask();
  const [showModalEditTask, setShowModalEditTask] = useState(false);
  const closeModal = () => {
    setShowModalEditTask(false);
  };

  const task = {
    id: id,
    title: title,
    description: description,
    check: check,
  };
  const handleChangeCheck = (e: boolean) => {
    const updatedTask = {
      id: id,
      title: title,
      description: description,
      check: e,
    };

    const newTasks = state.tasks;
    newTasks.splice(id, 1, updatedTask);
    console.log(
      "🚀 ~ file: index.tsx ~ line 38 ~ handleChangeCheck ~ newTasks",
      newTasks
    );
    dispatch({
      type: toDoActions.editTask,
      payload: newTasks,
    });
    localStorage.setItem(KEY, JSON.stringify(state.tasks));
  };

  return (
    <C.Container check={check}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Form.Check
            inline
            name="finish"
            type={"checkbox"}
            checked={check}
            onChange={(e) => handleChangeCheck(e.target.checked)}
          />
          <div
            className="contentCard"
            onClick={() => setShowModalEditTask(true)}
          >
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <ModalEditTask
        show={showModalEditTask}
        handleClose={closeModal}
        task={task}
      />
    </C.Container>
  );
};
