import React, { useEffect, useState } from "react";
import TabMedecinUserList from "../../Components/TabMedecinUserList/TabMedecinUserList";
import { getAllUsers } from "../../services/Users";
import "./MedecinUserList.css";

const MedecinUserList = () => {
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
    <div className="main-mu">
      {errorMessage}
      {users ?
      <TabMedecinUserList users={users}/> : <p>Chargement...</p>}
    </div>
  );
};

export default MedecinUserList;
