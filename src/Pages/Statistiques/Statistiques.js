import React, { useEffect, useState } from "react";
import "./Statistiques.css";
import WeightChart from "../../Components/Chart/Chart";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { getHealthData } from "../../services/Users";
import { isAuthenticate } from "../../services/Auth";

const Statistiques = () => {
  const [weightData, setweightData] = useState(null);
  const [bmiData, setBmiData] = useState(null);
  const [fatData, setfatData] = useState(null);
  const [waterData, setwaterData] = useState(null);
  const [muscleData, setmuscleData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const isAuth = await isAuthenticate();
        if(!isAuth)
        {
          navigate("/");
        }
        const userData = await getHealthData();
        setmuscleData({
          labels: userData.map((data) =>
            new Date(data.createdAt).toLocaleDateString()
          ),
          datasets: [
            {
              label: "Muscle",
              data: userData.map((data) => data.muscleRate),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });

        setwaterData({
          labels: userData.map((data) =>
            new Date(data.createdAt).toLocaleDateString()
          ),
          datasets: [
            {
              label: "Masse d'eau",
              data: userData.map((data) => data.waterRate),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });

        setfatData({
          labels: userData.map((data) =>
            new Date(data.createdAt).toLocaleDateString()
          ),
          datasets: [
            {
              label: "Masse Graisseuse",
              data: userData.map((data) => data.fatMassRate),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });

        setweightData({
          labels: userData.map((data) =>
            new Date(data.createdAt).toLocaleDateString()
          ),
          datasets: [
            {
              label: "Poids",
              data: userData.map((data) => data.weight),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });

        setBmiData({
          labels: userData.map((data) =>
            new Date(data.createdAt).toLocaleDateString()
          ),
          datasets: [
            {
              label: "IMC",
              data: userData.map((data) => data.bodyMassIndex),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });
      } catch (ex) {
        navigate("/stat");
      }
    };
    fetchDatas();
  });

  return (
    <div className="main-s">
      <div className="box-s">
        <h1>Statistiques</h1>
        <div className="graph">
          <nav>
            <Link to={"poids"} className="poids">
              Poids
            </Link>
            <Link to={"imc"} className="imc">
              IMC
            </Link>
            <Link to={"graisse"} className="taux_graisse">
              Taux graisse
            </Link>
            <Link to={"muscle"} className="taux_musculaire">
              Taux musculaire
            </Link>
            <Link to={"eau"} className="taux_d_eau">
              Taux d'eau
            </Link>
          </nav>
          {weightData && bmiData && fatData && waterData && muscleData ? (
            <Routes>
              <Route path="poids" element={<WeightChart data={weightData} />} />
              <Route path="imc" element={<WeightChart data={bmiData} />} />
              <Route path="graisse" element={<WeightChart data={fatData} />} />
              <Route
                path="muscle"
                element={<WeightChart data={muscleData} />}
              />
              <Route path="eau" element={<WeightChart data={waterData} />} />
            </Routes>
          ) : (
            <p>Chargement...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistiques;
