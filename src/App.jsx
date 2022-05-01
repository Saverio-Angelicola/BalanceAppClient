import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Register/Register.js";
import Modifier from "./Pages/Modifier/Modifier";
import MedecinUserList from "./Pages/MedecinUserList/MedecinUserList.js";
import Statistiques from "./Pages//Statistiques/Statistiques.js";
import AdminUserList from "./Pages/AdminUserList/AdminUserList.js";

export default function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };
  return (
    <section> <button onClick={handleClick}>Déconnexion</button>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="admin" element={<AdminUserList />} />
      <Route path="doctor" element={<MedecinUserList />} />
      <Route path="modifier" element={<Modifier />} />
      <Route path="stat/*" element={<Statistiques />} />
    </Routes>
    </section>
  );
}
