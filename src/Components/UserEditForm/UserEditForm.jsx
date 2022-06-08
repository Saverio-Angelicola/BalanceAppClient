import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUserById } from "../../services/Admin";
import "./UserEditForm.css";

const UserEditForm = () => {
  const [lastName, setLastName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(id);
        setEmail(user.email);
        setLastName(user.lastname);
        setFirstname(user.firstname);
        setRole("U");
      } catch (err) {
       navigate("/admin");
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editUser(email, firstname, lastName, role);
      navigate("/admin");
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Modifier l'utilisateur</h1>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Prénom"
            value={firstname}
            className="name1-fm"
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            className="name2-fm"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </li>
      </ul>
      <br />
      <ul>
        <li>
          <div className="box-input-fm">
            <p>Rôle :</p>
            <div className="role-fm">
              <input
                type="radio"
                id="Administrateur"
                name="rôle"
                value="U"
                onChange={(e) => setRole(e.target.value)}
                defaultChecked
                required
              />
              <label htmlFor="Administrateur">Utilisateur</label>
              <br />
              <input
                type="radio"
                id="Médecin"
                name="rôle"
                value="D"
                onChange={(e) => setRole(e.target.value)}
                required
              />
              <label htmlFor="Médecin">Médecin</label>
            </div>
          </div>
        </li>
        <li>
          <input
            type="email"
            placeholder="Email"
            className="email-fm"
            value={email}
            readOnly
            required
          />
        </li>
      </ul>
      <br />
      <button type="submit" className="sauvegarder">
        Enregistrer
      </button>
    </form>
  );
};

export default UserEditForm;
