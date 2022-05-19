import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toDoActions, useTask } from "../../contexts/todoContext";
import * as C from "./styles";

type Props = {
  show: boolean;
  handleClose: () => void;
};

export const ModalNewTask = ({ show, handleClose }: Props) => {
  const { state, dispatch } = useTask();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const resetModal = () => {
    setTitle("");
    setDescription("");
  };

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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" size="sm" onClick={creatTask}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </C.Container>
  );
};
