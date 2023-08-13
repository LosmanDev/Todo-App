/* eslint-disable react/prop-types */
import { TextField, Paper } from "@mui/material";
import useInputState from "./Hooks/useInputState";
const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper
      style={{
        margin: "1rem 0",
        padding: "0 1rem",
        backgroundColor: "#EADBC8",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          id="standard-basic"
          label="Add To Do...🧐"
          variant="standard"
          value={value}
          onChange={handleChange}
          margin="normal"
          className="todo-grid"
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
