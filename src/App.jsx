import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login.js";
import MedecinUserList from "./Pages/MedecinUserList/MedecinUserList.js";
import Statistiques from "./Pages//Statistiques/Statistiques.js";
import AdminUserList from "./Pages/AdminUserList/AdminUserList.js";
import Layout from "./Components/Layout/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import { AdminRequired } from "./routes/AdminRequired";
import { DoctorRequired } from "./routes/DoctorRequired";
import UserEdit from "./Pages/UserEdit/UserEdit";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import AddUser from "./Pages/AddUser/AddUser";
import Register from "./Pages/Register/Register";
import DoctorStats from "./Pages/DoctorStats/DoctorStats";
import { UserRequired } from "./routes/UserRequired";

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
          <Route
            path="stat/*"
            element={
              <UserRequired>
                <Statistiques />
              </UserRequired>
            }
          />
          <Route
            path="/admin/user/add"
            element={
              <AdminRequired>
                <AddUser />
              </AdminRequired>
            }
          />
          <Route
            path="admin"
            element={
              <AdminRequired>
                <AdminUserList />
              </AdminRequired>
            }
          />
          <Route
            path="admin/user/edit/:id"
            element={
              <AdminRequired>
                <UserEdit />
              </AdminRequired>
            }
          />
          <Route
            path="doctor"
            element={
              <DoctorRequired>
                <MedecinUserList />
              </DoctorRequired>
            }
          />
          <Route
            path="doctor/stats/:id/*"
            element={
              <DoctorRequired>
                <DoctorStats />
              </DoctorRequired>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
