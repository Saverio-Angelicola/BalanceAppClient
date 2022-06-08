import React from "react";
import "./AddUser.css";
import AddUserForm from "../../Components/AddUserForm/AddUserForm";

const AddUser = () => {
  return (
    <div className="main-r">
      <div className="box-r">
        <div className="title-r"></div>
        <div>
        <h1>Ajout d'un Médecin</h1>
          <AddUserForm />
        </div>
      </div>
    </div>
  );
};

export default AddUser;
