import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";

interface User {
  _id: string;
  name: string;
  email: string;
}

interface UserListItemProps {
  user: User;
  onEditUser: (userId: string) => void;
}

const UserListItem: React.FC<UserListItemProps> = ({ user, onEditUser }) => {
  const classes = useStyles();

  return (
    <ListItem
      key={user._id}
      alignItems="center"
      className={classes.listItem}
      style={{ background: "#e1f5fe" }}
    >
      <ListItemText primary={`${user.name} - ${user.email}`} />
      <Button color="primary" onClick={() => onEditUser(user._id)}>
        Edit
      </Button>
      <Button color="primary" onClick={() => onEditUser(user._id)}>
        Delete
      </Button>
    </ListItem>
  );
};

export default UserListItem;
