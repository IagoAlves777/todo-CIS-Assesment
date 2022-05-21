import GlobalStyle from "./globalStyle";
import { ToDoProvider } from "./contexts/todoContext";
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
