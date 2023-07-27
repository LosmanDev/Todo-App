/* eslint-disable react/prop-types */
import {
  ListItem,
  Divider,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todo = ({ id, task, completed, removeTodo, toggleTodo }) => {
  return (
    <div>
      <ListItem>
        <Checkbox
          tabIndex={-1}
          checked={completed}
          onClick={() => {
            toggleTodo(id);
          }}
        />
        <ListItemText
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              removeTodo(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  );
};

export default Todo;
