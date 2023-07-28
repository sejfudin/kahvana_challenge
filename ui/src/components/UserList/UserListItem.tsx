import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
import EditUserModal from "../UserModal/EditUserModal";
import { User } from "../../utils/interfaces";
import { deleteUser, getAllUsers } from "../../services/userService";

interface UserListItemProps {
  user: User;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const classes = useStyles();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const handleEditUser = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteUser = async (id: string) => {
    await deleteUser(id);
    await getAllUsers();
  };

  return (
    <>
      <ListItem
        key={user._id}
        alignItems="center"
        className={classes.listItem}
        style={{ background: "#e1f5fe" }}
      >
        <ListItemText primary={`${user.name} - ${user.email}`} />
        <Button color="primary" onClick={() => handleEditUser()}>
          Edit
        </Button>
        <Button
          color="primary"
          onClick={() => handleDeleteUser(user._id ?? "")}
        >
          Delete
        </Button>
      </ListItem>
      {isEditModalOpen && (
        <EditUserModal
          open={isEditModalOpen}
          user={user}
          onClose={() => setIsEditModalOpen(false)}
          id={user._id ?? ""}
        />
      )}
    </>
  );
};

export default UserListItem;
