import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toDoActions, useTask } from "../../contexts/todoContext";
import * as C from "./styles";

type Props = {
  title: string;
  description: string;
  show: boolean;
  edit: boolean;
  handleClose: () => void;
};

export const ModalNewTask = ({
  edit,
  show,
  handleClose,
  title,
  description,
}: Props) => {
  const { state, dispatch } = useTask();
  const [newtitle, setNewTitle] = useState("");
  const [newdescription, setNewDescription] = useState("");

  const resetModal = () => {
    setNewTitle("");
    setNewDescription("");
  };

  useEffect(() => {
    setNewTitle(title);
    setNewDescription(description);
  }, []);

  const creatTask = () => {
    const newTask = {
      id: state.tasks.length,
      title: title,
      description: description,
      check: false,
    };
    const newTasks = state.tasks;
    newTasks.push(newTask);
    dispatch({
      type: toDoActions.createTask,
      payload: newTasks,
    });
    handleClose();
    resetModal();
  };
  return (
    <C.Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar uma nova tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Insira um título para este cartão..."
            value={newtitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <C.Description>Descrição</C.Description>
          <Form.Control
            as="textarea"
            rows={7}
            value={newdescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={edit ? handleClose : creatTask}
          >
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </C.Container>
  );
};
