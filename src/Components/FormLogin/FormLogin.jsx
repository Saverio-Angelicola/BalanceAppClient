import React, { useState } from "react";
import "./FormLogin.css";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("Connexion en cours...");
      await auth.signin(email, password);
    } catch (err) {
      setErrorMessage("Email ou mot de passe invalide!");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {errorMessage}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            className="name-l"
            required
          />
        </div>
        <div className="second-input-l">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            className="name-l"
            required
          />
        </div>
        <div className="login-button-l">
          <button className="button-l" type="submit">
            Connexion
          </button>
        </div>
        <br />
        <p>Pas de compte ? <Link to="/inscription">Inscrivez-vous</Link> </p>
      </form>
    </div>
  );
};

export default FormLogin;
