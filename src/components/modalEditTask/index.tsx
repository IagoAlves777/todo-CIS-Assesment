import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toDoActions, useTask } from "../../contexts/todoContext";
import { KEY } from "../../contexts/todoContext";
import * as C from "./styles";

type Props = {
  show: boolean;
  handleClose: () => void;
  task: any;
};

export const ModalEditTask = ({ show, handleClose, task }: Props) => {
  const { state, dispatch } = useTask();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [invalidTitle, setInvalidTitle] = useState(false);

  const resetModal = () => {
    handleClose();
    setTitle(task.title);
    setDescription(task.description);
  };

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
  }, [state]);

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
      date: new Date(),
    };

    const newTasks = state.tasks;
    newTasks.splice(task.id, 1, updatedTask);
    dispatch({
      type: toDoActions.editTask,
      payload: newTasks,
    });
    localStorage.setItem(KEY, JSON.stringify(state.tasks));
    handleClose();
  };

  const deleteTask = () => {
    const newTasks = state.tasks;
    newTasks.splice(task.id, 1);
    const auxNewTasks = newTasks.map(function (task, index) {
      return (task = {
        ...task,
        id: index,
      });
    });
    dispatch({
      type: toDoActions.deleteTask,
      payload: auxNewTasks,
    });
    localStorage.setItem(KEY, JSON.stringify(auxNewTasks));
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar uma nova tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <C.Title>*Título</C.Title>
        <Form.Control
          type="text"
          placeholder="Insira um título para atividade..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isInvalid={invalidTitle}
        />
        <C.Description>Descrição</C.Description>
        <Form.Control
          as="textarea"
          placeholder="Insira uma descrição"
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
              Salvar
            </Button>
          </div>
        </C.Container>
      </Modal.Footer>
    </Modal>
  );
};
