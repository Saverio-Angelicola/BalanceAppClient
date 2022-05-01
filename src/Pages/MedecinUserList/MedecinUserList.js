import React, { useEffect } from "react";
import TabMedecinUserList from "../../Components/TabMedecinUserList/TabMedecinUserList";
import { useNavigate } from "react-router-dom";
import "./MedecinUserList.css";

const MedecinUserList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
  });
  return (
    <div className="main-mu">
      <TabMedecinUserList />
    </div>
  );
};

export default MedecinUserList;
