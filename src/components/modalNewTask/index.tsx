import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toDoActions, useTask, KEY } from "../../contexts/todoContext";
import * as C from "./styles";

type Props = {
  show: boolean;
  handleClose: () => void;
};

export const ModalNewTask = ({ show, handleClose }: Props) => {
  const { state, dispatch } = useTask();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [invalidTitle, setInvalidTitle] = useState(false);

  const titleIsInvalid = () => {
    if (title === "") {
      setInvalidTitle(true);
      return true;
    } else {
      setInvalidTitle(false);
      return false;
    }
  };

  const localStorageList = [];
  for (var i = 0; i < localStorage.length; i++) {
    localStorageList.push(localStorage.key(i));
  }

  const haveTheKey = localStorageList.filter(function (item) {
    return item === KEY;
  });

  useEffect(() => {
    if (haveTheKey.length > 0) {
      // @ts-ignore
      const initialTask = JSON.parse(localStorage.getItem(KEY));
      dispatch({
        type: toDoActions.editTask,
        payload: initialTask,
      });
    }
  }, []);

  useEffect(() => {
    if (invalidTitle && title != "") {
      setInvalidTitle(false);
    }
  }, [title]);

  const resetModal = () => {
    setTitle("");
    setDescription("");
    handleClose();
    setInvalidTitle(false);
  };

  const creatTask = () => {
    if (titleIsInvalid()) return;
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
    localStorage.setItem(KEY, JSON.stringify(state.tasks));
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
          <Button variant="secondary" size="sm" onClick={resetModal}>
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
