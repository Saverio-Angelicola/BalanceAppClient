import React, { useEffect } from "react";
import "./Register.css";
import FormRegister from "../../Components/FormRegister/FormRegister";
import { useNavigate } from "react-router-dom";
import { getRole } from "../../services/Auth";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkRole = async () => {
      try {
        const role = await getRole();
        if (role !== "Admin") {
          navigate("/stat");
        }
      } catch (err) {
        navigate("/stat");
      }
    };
    checkRole();
  });
  return (
    <div className="main-r">
      <div className="box-r">
        <div className="title-r"></div>
        <div>
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;
