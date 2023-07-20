import { Paper, Typography, AppBar, Toolbar, Grid } from "@mui/material";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const initialTodos = [
    {
      id: crypto.randomUUID(),
      task: "Clean the fish tank",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      task: "Walk the Dog",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      task: "Wash my cat",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), task: newTodoText, completed: false },
    ]);
  };
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
      <Grid
        container
        spacing={2}
        style={{ justifyContent: "center", marginTop: "1rem" }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
