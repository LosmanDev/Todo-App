import { Paper, List, Divider } from "@mui/material";
import Todo from "./Todo";

/* eslint-disable react/prop-types */
const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 ? <Divider /> : ""}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
