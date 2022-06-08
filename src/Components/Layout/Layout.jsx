import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Layout.css"
const Layout = ({ children }) => {
  const auth = useAuth();
  const handleClick = async () => {
    auth.signout();
  };
  return (
    <section>
      <header>
        <nav>
          <Link to="/">Accueil</Link>
          {auth.user ? <Link to={"/stat/poids"}>Statistiques</Link> : null}
          {auth.user && auth.user.role === "Doctor" ? <Link to={"doctor"}>Gestion des patients</Link> : null}
          {auth.user && auth.user.role === "Admin" ? (
            <Link to={"admin"}>Espace Administrateur</Link>
          ) : null}
          {auth.user ? (
            <button onClick={handleClick}>Déconnexion</button>
          ) : <Link to="/login">Connexion</Link>}
        </nav>
      </header>
      {children}
      <footer></footer>
    </section>  
  );
};
export default Layout;
