import React, { useEffect, useState } from "react";
import TabAdminUserList from "../../Components/TabAdminUserList/TabAdminUserList";
import "./AdminUserList.css";
import { getAllUsers } from "../../services/Users";

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await getAllUsers();
        setUsers(allUsers);
        setErrorMessage("");
      } catch (err) {
        setErrorMessage("Une erreur s'est produite.");
      }
    };
    fetchUsers();
  },[]);
  return (
    <div className="main-a">
      {errorMessage}
      {users ? <TabAdminUserList users={users} /> : <p>Chargement...</p>}
    </div>
  );
};

export default AdminUserList;
