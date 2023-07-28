import { ChangeEvent, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import { getAllUsers } from "./services/userService";
import { User } from "./utils/interfaces";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    try {
      // Call the getAllUsers function with the search query
      const filteredUsers = await getAllUsers(value);
      setUsers(filteredUsers || []);
    } catch (error: any) {
      setUsers([]);
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      if (data) {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <>
      <Header
        handleSearchChange={handleSearchChange}
        setUsers={setUsers}
        searchQuery={searchQuery}
      />
      <UserList users={users} setUsers={setUsers} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
