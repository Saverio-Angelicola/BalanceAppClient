import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './FormModifier.css';


const FormModifier = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [administrateur, setAdministrateur]= useState("");
  const [médecin, setMédecin]= useState("");
  const [email, setEmail] = useState("");
  const [réinit, setRéinit] = useState("");
  const [save, setSave] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
      const token = localStorage.getItem("jwt");
      if(token)
      {
          navigate("/modifier");
      }
  })

  const handleChange =(e)=>{
    setName(e.target.value);
  }

  const handleFirstnameChange =(e)=>{
    setFirstname(e.target.value)
  }

  const handleAdministrateurChange =(e)=>{
    setAdministrateur(e.target.value)
  }

  const handleMedecinChange =(e)=>{
    setMédecin(e.target.value)
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
  }

  const handleRéinitChange=(e)=>{
    setRéinit(e.target.value)
  }

  const handleSaveChange=(e)=>{
    setSave(e.target.value)
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    try
    {
      setName("");
      setFirstname("");
      setAdministrateur("");
      setMédecin("");
      setEmail("");
      setRéinit("");
      setSave("");
      navigate("modifier");
    }
    catch(err)
  {
    setName("")
    setFirstname("")
    setAdministrateur("")
    setMédecin("")
    setEmail("")
    setRéinit("")
    setSave("")
  }

  }

    return (
      <form onSubmit={handleSubmit}>
        <h1>Modifier l'utilisateur</h1>
        <ul>
          <li>
          <input type="text" placeholder="Nom" className="name1-fm" required onChange={(e)=> {handleChange(e)}} />
          </li>
        <li>
          <input type="text" placeholder="Prénom" className="name2-fm" required onChange={(e)=> {handleFirstnameChange(e)}} />
        </li>
        </ul>
        <br/>
        <ul>
          <li>
        
        <div className="box-input-fm">
        <p>Rôle :</p>
          <div className="role-fm">
            <input type="radio" id="Administrateur" name="rôle" value="Administrateur" checked required onChange={(e)=> {handleAdministrateurChange(e)}}/>
            <label htmlFor="Administrateur">Administrateur</label>
            <br></br>
            <input type="radio" id="Médecin" name="rôle" value="Médecin" checked required onChange={(e)=> {handleMedecinChange(e)}}/>
            <label htmlFor="Médecin">Médecin</label>
          </div>
        </div>
        </li>
        {/*
        <div>
            <input type="text" placeholder="Rôle" className="name-r" /> 
        </div>
        */}
        <li>
            <input type="email" placeholder="Email"  className="email-fm" required onChange={(e)=> {handleEmailChange(e)}}/>
        </li>
        </ul>
        <ul>
        <li>
          <input className="réinitialiser réinitialiser-white réinitialiser-animated" type="Reset" value="Réinitialiser" required onChange={(e)=> {handleRéinitChange(e)}}/>
        </li>
        <li>
          <input className="sauvegarder sauvegarder-red sauvegarder-animated" type="Submit" value="Sauvegarder" required onChange={(e)=> {handleSaveChange(e)}}/>
        </li>
        </ul>
      </form>
    );
};
  
export default FormModifier;