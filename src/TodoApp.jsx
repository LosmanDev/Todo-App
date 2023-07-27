import { Paper, Typography, AppBar, Toolbar, Grid } from "@mui/material";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

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
      completed: true,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), task: newTodoText, completed: false },
    ]);
  };

  const removeTodo = (todoId) => {
    //filter out removed todo
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
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
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
