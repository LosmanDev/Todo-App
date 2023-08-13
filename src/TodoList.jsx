import { Paper, List, Divider } from "@mui/material";
import Todo from "./Todo";

/* eslint-disable react/prop-types */
const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length)
    return (
      <Paper>
        <List style={{ backgroundColor: "#EADBC8" }}>
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
              {i < todos.length - 1 ? (
                <Divider style={{ backgroundColor: " #102C57" }} />
              ) : (
                ""
              )}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
