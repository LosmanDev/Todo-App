import { Paper, List } from "@mui/material";
import Todo from "./Todo";

/* eslint-disable react/prop-types */
const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            task={todo.task}
            key={todo.id}
            completed={todo.completed}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
