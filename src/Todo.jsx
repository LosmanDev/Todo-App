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

const Todo = ({ task, completed }) => {
  return (
    <div>
      <ListItem>
        <Checkbox tabIndex={-1} checked={completed} />
        <ListItemText
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
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
