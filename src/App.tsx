import { useState } from "react";
import { Button } from "react-bootstrap";
import GlobalStyle from "./globalStyle";
import { ToDoProvider } from "./contexts/todoContext";
import { CardTask } from "./components/cardTask";
import { TaskList } from "./components/tasksList";

function App() {
  return (
    <ToDoProvider>
      <TaskList />
      <GlobalStyle />
    </ToDoProvider>
  );
}

export default App;
