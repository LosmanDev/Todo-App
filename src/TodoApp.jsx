import { Paper, Typography, AppBar, Toolbar, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    //Map through each todos & for each one check if it is currently the one trying to toggle
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#F8F0E5",
      }}
    >
      <AppBar
        className="nav-color"
        position="static"
        style={{ height: "64px" }}
      >
        <Toolbar>
          <Typography className="todo-text">Todo List</Typography>
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
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
