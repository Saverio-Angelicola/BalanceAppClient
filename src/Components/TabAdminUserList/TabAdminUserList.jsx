import React from "react";
import "./TabAdminUserList.css";
import { Link } from "react-router-dom";

const TabAdminUserList = ({ users }) => {
  const getUserList = () => {
    return users.flatMap((user) => {
      const registerDate = new Date(user.registerDate);
      if (user.role !== "Admin") {
        return (
          <tr key={user.id}>
            <td>{user.lastname}</td>
            <td> {user.firstname} </td>
            <td>{user.role}</td>
            <td>{registerDate.toLocaleString()}</td>
            <td className="btn-block">
              <Link to={`user/edit/${user.id}`} className="edit-button-t">
                Modifier
              </Link>
              <button className="suppr-button-t">Supprimer</button>
            </td>
          </tr>
        );
      }
      return [];
    });
  };
  return (
    <div>
      <h1>Gestion des utilisateurs</h1>
      <Link to={"/admin/user/add"} className="add-button-t">Ajouter un Médecin</Link>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Rôle</th>
            <th>Date de création</th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>{getUserList()}</tbody>
      </table>
    </div>
  );
};

export default TabAdminUserList;
