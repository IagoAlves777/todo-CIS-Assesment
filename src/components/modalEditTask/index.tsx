import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toDoActions, useTask } from "../../contexts/todoContext";
import * as C from "./styles";

type Props = {
  show: boolean;
  handleClose: () => void;
  task: any;
};

export const ModalEditTask = ({ show, handleClose, task }: Props) => {
  const { state, dispatch } = useTask();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [invalidTitle, setInvalidTitle] = useState(false);

  const resetModal = () => {
    handleClose();
    setTitle(task.title);
    setDescription(task.description);
  };

  const titleIsInvalid = () => {
    if (title === "") {
      setInvalidTitle(true);
      return true;
    } else {
      setInvalidTitle(false);
      return false;
    }
  };

  useEffect(() => {
    if (invalidTitle && title != "") {
      setInvalidTitle(false);
    }
  }, [title]);

  const editTask = () => {
    if (titleIsInvalid()) return;
    const updatedTask = {
      id: task.id,
      title: title,
      description: description,
      check: task.check,
    };

    const newTasks = state.tasks;
    newTasks.splice(task.id, 1, updatedTask);
    dispatch({
      type: toDoActions.editTask,
      payload: newTasks,
    });
    handleClose();
  };

  const deleteTask = () => {
    const newTasks = state.tasks;
    newTasks.splice(task.id, 1);
    dispatch({
      type: toDoActions.deleteTask,
      payload: newTasks,
    });
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar uma nova tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="Insira um título para este cartão..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isInvalid={invalidTitle}
        />
        <C.Description>Descrição</C.Description>
        <Form.Control
          as="textarea"
          rows={7}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <C.Container>
          <Button variant="danger" size="sm" onClick={deleteTask}>
            Excluir
          </Button>
          <div className="buttons">
            <Button variant="secondary" size="sm" onClick={resetModal}>
              Cancelar
            </Button>
            <Button variant="primary" size="sm" onClick={editTask}>
              Adicionar
            </Button>
          </div>
        </C.Container>
      </Modal.Footer>
    </Modal>
  );
};
