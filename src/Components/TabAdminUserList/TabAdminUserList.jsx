import React from "react";
import "./TabAdminUserList.css";
import { Link, useNavigate } from "react-router-dom";

const TabAdminUserList = ({users}) => {

  const getUserList = () => {
    return users.map((user) => {
      const registerDate = new Date(user.registerDate);
      return (
        
          <tr key={user.email}>
            <td>{user.lastname}</td>
            <td> {user.firstname} </td>
            <td>{user.role}</td>
            <td>{registerDate.toLocaleString()}</td>
            <td className="btn-block">
              <Link to="/modifier" className="edit-button-t">Modifier</Link>
              <button className="suppr-button-t">Supprimer</button>
            </td>
          </tr>
      );
    });
  };
  return (
    <div>
     
      <table>
        <caption>Bienvenue dans l'espace administrateur</caption>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Rôle</th>
            <th>Date de création</th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>
        {getUserList()}
        </tbody>
      </table>
    </div>
  );
};

export default TabAdminUserList;
