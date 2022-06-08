import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoctor } from "../../services/Admin";
import "./AddUserForm.css";

const AddUserForm = () => {
  const [lastname, setLastname] = useState();
  const [firstname, setFirstname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [birthdate, setBirthdate] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await addDoctor({ lastname, firstname, email, password, birthdate });
      navigate("/admin");
    } catch (err) {
      setErrorMessage("Une erreur est survenue !");
    }
    setLastname("");
    setFirstname("");
    setEmail("");
    setPassword("");
    setBirthdate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{errorMessage}</p>
      <div>
        <input
          type="text"
          placeholder="Nom"
          className="name-r"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Prénom"
          className="name-r"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          className="name-r"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="date"
          placeholder="Date de naissance"
          className="name-r"
          onChange={(e) =>
            setBirthdate(new Date(e.target.value).toLocaleDateString())
          }
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          className="name-r"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="button-r" type="submit">
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
