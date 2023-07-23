import React from "react";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";

function App() {
  const handleEditUser = (userId: string) => {
    // Implement the logic for editing a user
    console.log("Editing user with ID:", userId);
  };
  return (
    <>
      <Header />
      <UserList onEditUser={handleEditUser}/>
    </>
  );
}

export default App;
