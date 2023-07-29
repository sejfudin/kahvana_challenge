import React, { useState } from "react";
import { ListItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
import EditUserModal from "../UserModal/EditUserModal";
import { User, UserListItemProps } from "../../utils/interfaces";
import { deleteUser, getAllUsers } from "../../services/userService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserListItem: React.FC<UserListItemProps> = ({
  user,
  setUsers,
  searchQuery,
}) => {
  const classes = useStyles();

  // Open or close edituser modal
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  // Method that open edit user modal
  const handleEditUser = () => {
    setIsEditModalOpen(true);
  };

  // Delete user method
  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);
      const users: User[] = await getAllUsers(searchQuery);
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <Typography>{`Name: ${user.name}`}</Typography>
            <Typography>{`Email: ${user.email}`}</Typography>
            <Typography>{`Phone: ${
              user.phoneNumber ? user.phoneNumber : "Not provided"
            }`}</Typography>
          </div>
          <div>
            <Button color="primary" onClick={() => handleEditUser()}>
              Edit
            </Button>
            <Button
              color="primary"
              onClick={() => handleDeleteUser(user._id ?? "")}
            >
              Delete
            </Button>
          </div>
        </div>
      </ListItem>
      <ToastContainer autoClose={3000} />
      {isEditModalOpen && (
        <EditUserModal
          open={isEditModalOpen}
          user={user}
          onClose={() => setIsEditModalOpen(false)}
          id={user._id ?? ""}
          setUsers={setUsers}
          searchQuery={searchQuery}
        />
      )}
    </>
  );
};

export default UserListItem;
