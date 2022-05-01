import React from "react";
import "./TabMedecinUserList.css";
import { useNavigate } from "react-router-dom";

const TabMedecinUserList = () => {
  const navigate = useNavigate();
  const users = [
    {
      firstname: "toto",
      lastname: "tutu",
      role: "Admin",
      CreatedAt: "10/05/2000",
    },
    {
      firstname: "too",
      lastname: "tutu",
      role: "Doctor",
      CreatedAt: "10/05/2000",
    },
    {
      firstname: "too",
      lastname: "tutu",
      role: "Doctor",
      CreatedAt: "10/05/2000",
    },
    {
      firstname: "too",
      lastname: "tutu",
      role: "Doctor",
      CreatedAt: "10/05/2000",
    },
    {
      firstname: "tto",
      lastname: "tutu",
      role: "Admin",
      CreatedAt: "10/05/2000",
    },
    {
      firstname: "totu",
      lastname: "tuu",
      role: "Doctor",
      CreatedAt: "10/05/2000",
    },
  ];

  const getUserList = () => {
    return users.map((user) => {
      return (
        <tr>
          <td> {user.firstname} </td>
          <td>{user.lastname}</td>
          <td>{user.role}</td>
          <td>{user.age}</td>
          <td>{user.size}</td>
          <td>{user.CreatedAt}</td>
          <td onClick={voirStat} className="btn-block-tm">
            <button className="voir-button-tm">Voir statistiques</button>
          </td>
        </tr>
      );
    });
  };
  const handleClick = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };

  const voirStat = () => {
    navigate("/stat");
  };

  return (
    <div>
      <button onClick={handleClick}>Déconnexion</button>
      <table>
        <caption>Bienvenue dans l'espace médecin</caption>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Rôle</th>
            <th>Age</th>
            <th>Taille</th>
            <th>Date de création</th>
            <th> - </th>
          </tr>
        </thead>
        {getUserList()}
      </table>
    </div>
  );
};

export default TabMedecinUserList;
