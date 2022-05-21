import * as C from "./styles";
import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import { toDoActions, useTask } from "../../contexts/todoContext";
import { ModalEditTask } from "../modalEditTask";
import { KEY } from "../../contexts/todoContext";
import { formatDate, formatHour } from "../../helpers/date";

type Props = {
  id: number;
  title: string;
  description: string;
  date: Date;
  check: boolean;
};

export const CardTask = ({ id, title, description, check, date }: Props) => {
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
    date: date,
  };
  const handleChangeCheck = (e: boolean) => {
    const updatedTask = {
      id: id,
      title: title,
      description: description,
      check: e,
      date: new Date(),
    };

    const newTasks = state.tasks;
    newTasks.splice(id, 1, updatedTask);
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
        <div className="changeDate">
          <h2>{formatDate(date) + "\n" + formatHour(date).toString()}</h2>
        </div>
      </Card>
      <ModalEditTask
        show={showModalEditTask}
        handleClose={closeModal}
        task={task}
      />
    </C.Container>
  );
};
