import React, { useState } from "react";
import { ListItem, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
import EditUserModal from "../UserModal/EditUserModal";
import { User, UserListItemProps } from "../../utils/interfaces";
import { deleteUser, getAllUsers } from "../../services/userService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserListItem: React.FC<UserListItemProps> = ({ user, setUsers }) => {
  const classes = useStyles();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const handleEditUser = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);
      const users: User[] = await getAllUsers();
      setUsers(users);
      toast.success("User successfully deleted!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error: any) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
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
      <ToastContainer autoClose={3000} />
      {isEditModalOpen && (
        <EditUserModal
          open={isEditModalOpen}
          user={user}
          onClose={() => setIsEditModalOpen(false)}
          id={user._id ?? ""}
          setUsers={setUsers}
        />
      )}
    </>
  );
};

export default UserListItem;
