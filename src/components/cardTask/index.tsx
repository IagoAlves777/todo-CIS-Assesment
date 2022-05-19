import * as C from "./styles";
import { Button, Card, Form } from "react-bootstrap";
import { ModalNewTask } from "../modalNewTask";
import { ChangeEvent, useState } from "react";
import { toDoActions, useTask } from "../../contexts/todoContext";

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
  const handleChangeCheck = (e: boolean) => {
    const updatedTask = {
      id: id,
      title: title,
      description: description,
      check: e,
    };
    const newTasks = state.tasks;
    newTasks.splice(id, 1, updatedTask);
    dispatch({
      type: toDoActions.editTask,
      payload: newTasks,
    });
  };

  return (
    <C.Container>
      <Card
        style={{ width: "18rem" }}
        onClick={() => setShowModalEditTask(true)}
      >
        <Card.Body>
          <Form.Check
            inline
            name="finish"
            type={"checkbox"}
            checked={check}
            onChange={(e) => handleChangeCheck(e.target.checked)}
          />
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <ModalNewTask show={showModalEditTask} handleClose={closeModal} />
    </C.Container>
  );
};
