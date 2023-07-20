import { Paper, List } from "@mui/material";
import Todo from "./Todo";

/* eslint-disable react/prop-types */
const TodoList = (props) => {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
