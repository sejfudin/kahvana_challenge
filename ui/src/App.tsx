import { ChangeEvent, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import { getAllUsers } from "./services/userService";
import { SearchQuery, User } from "./utils/interfaces";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //State for search query
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  //State for list of users from backend
  const [users, setUsers] = useState<User[]>([]);

  //Method that update searchQuery state every time when user enter something in one of search fields
  const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  //Method for getting searched users from backend
  const fetchUsers = async () => {
    try {
      // Call the getAllUsers function with the search query
      const filteredUsers = await getAllUsers(searchQuery);
      setUsers(filteredUsers || []);
    } catch (error: any) {
      setUsers([]);
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  //Call fetchUsers every time when something is typed in search field
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <>
      <Header
        handleSearchChange={handleSearchChange}
        setUsers={setUsers}
        searchQuery={searchQuery}
      />
      <UserList users={users} setUsers={setUsers} searchQuery={searchQuery} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
