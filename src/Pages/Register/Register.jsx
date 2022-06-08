import React, { useState } from "react";
import { registerUser } from "../../services/Auth";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("Connexion en cours...");
      const userEmail = await registerUser({
        email,
        password,
        firstname,
        lastname,
        birthdate,
      });
      if (userEmail) {
        window.location.replace(
          `https://account.withings.com/oauth2_user/authorize2?response_type=code&client_id=cb9810b32ebb519c18488ff6b725e5230816d876a8aac4286eb1eb5b6f2652d5&state=${userEmail}&scope=user.metrics&redirect_uri=https%3A%2F%2Fbalance-app-blaise-pascal.herokuapp.com%2Fapi%2Fauth%2Fwithings%2Fregister`
        );
      } else {
        setErrorMessage(
          "Une erreur est survenue lors de l'inscription ! Veuillez essayer à nouveau !"
        );
      }
    } catch (err) {
      setErrorMessage(
        "Une erreur est survenue lors de l'inscription ! Veuillez essayer à nouveau !"
      );
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="main-r">
      <form className="box-r" onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        <p>{errorMessage}</p>
        <input
          type="text"
          placeholder="Prénom"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
          name="firstname"
          className="name-r"
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
          name="Lastname"
          className="name-r"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          className="name-r"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          className="name-r"
          required
        />
        <input
          type="date"
          name="birthdate"
          className="name-r"
          onChange={(event) =>
            setBirthdate(new Date(event.target.value).toLocaleDateString())
          }
        />

        <button className="button-r" type="submit">
          s'inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;
