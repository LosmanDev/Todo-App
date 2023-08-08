import { Paper, Typography, AppBar, Toolbar, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  //Todo Data to re-render component using state
  // const initialTodos = [
  //   {
  //     id: 1,
  //     task: "Wash Car",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     task: "Oil Change",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     task: "Feed cat",
  //     completed: true,
  //   },
  // ];

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
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
