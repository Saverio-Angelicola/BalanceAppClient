import React from "react";
import "./TabMedecinUserList.css";
import { Link } from "react-router-dom";

const TabMedecinUserList = ({ users }) => {
  const getAge = (date) => {
    const destructDate = date.split("/");
    var diff =
      Date.now() -
      new Date(destructDate[2], destructDate[1], destructDate[0]).getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  };
  const getUserList = users.flatMap((user) => {
    const registerDate = new Date(user.registerDate);
    if (user.role === "User") {
      return (
        <tr key={user.id}>
          <td> {user.firstname} </td>
          <td>{user.lastname}</td>
          <td>{getAge(user.birthDate)} ans</td>
          <td>{user.height}m</td>
          <td>{registerDate.toLocaleDateString()}</td>
          <td className="btn-block-tm">
            <Link to={`/doctor/stats/${user.id}`} className="voir-button-tm">
              Voir statistiques
            </Link>
          </td>
        </tr>
      );
    }
    return [];
  });

  return (
    <div>
      <h1>Bienvenue dans l'espace de gestion des patients</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Age</th>
            <th>Taille</th>
            <th>Date d'inscription</th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>{getUserList}</tbody>
      </table>
    </div>
  );
};

export default TabMedecinUserList;
