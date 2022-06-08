import React from "react";
import "./UserEdit.css";
import UserEditForm from "../../Components/UserEditForm/UserEditForm";

const UserEdit = () => {
  return (
    <div className="main-m">
      <div className="box-m">
        <div className="title-m"></div>
        <div>
          <UserEditForm />
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
