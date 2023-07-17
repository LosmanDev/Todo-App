import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import TodoList from "./TodoList";

const TodoApp = () => {
  const initialTodos = [
    {
      id: 1,
      task: "Clean the fish tank",
      completed: false,
    },
    {
      id: 2,
      task: "Walk the Dog",
      completed: false,
    },
    {
      id: 3,
      task: "Wash my cat",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
};

export default TodoApp;
