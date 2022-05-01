import React, { useEffect, useState } from "react";
import TabAdminUserList from "../../Components/TabAdminUserList/TabAdminUserList";
import { useNavigate } from "react-router-dom";
import "./AdminUserList.css";
import { getAllUsers } from "../../services/Users";
import { getRole } from "../../services/Auth";

const AdminUserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const role = await getRole();
        if (role !== "Admin") {
        navigate("/stat");
        }
        const allUsers = await getAllUsers();
        setUsers(allUsers);
      } catch (err) {
        navigate("/stat");
      }
    };
    fetchUsers();
  }, [navigate]);
  return (
    <div className="main-a">
     { users? <TabAdminUserList users={users}/> : <p>Chargement...</p> }
    </div>
  );
};

export default AdminUserList;
