import React, { useEffect, useState } from "react";
import "../Statistiques/Statistiques.css";
import WeightChart from "../../Components/Chart/Chart";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { getBodyDataById, getHealthData } from "../../services/Users";

const DoctorStats = () => {
  const [weightData, setweightData] = useState(null);
  const [bmiData, setBmiData] = useState(null);
  const [fatData, setfatData] = useState(null);
  const [waterData, setwaterData] = useState(null);
  const [muscleData, setmuscleData] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const timestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const userData = await getBodyDataById(id);
        setmuscleData({
          labels: userData.flatMap((data) => {
            if (data.muscleRate > 0) return timestampToDate(data.createdAt);
            return [];
          }),
          datasets: [
            {
              label: "Muscle",
              data: userData.flatMap((data) => {
                if (data.muscleRate > 0) return data.muscleRate;
                return [];
              }),
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
          labels: userData.flatMap((data) => {
            if (data.waterRate > 0) return timestampToDate(data.createdAt);
            return [];
          }),
          datasets: [
            {
              label: "Masse d'eau",
              data: userData.flatMap((data) => {
                if (data.waterRate > 0) return data.waterRate;
                return [];
              }),
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
          labels: userData.flatMap((data) => {
            if (data.fatMassRate > 0) {
              return timestampToDate(data.createdAt);
            }
            return [];
          }),
          datasets: [
            {
              label: "Masse Graisseuse (en kg)",
              data: userData.flatMap((data) => {
                if (data.fatMassRate > 0) {
                  return data.fatMassRate;
                }
                return [];
              }),
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
          labels: userData.flatMap((data) => {
            if (data.weight > 0) return timestampToDate(data.createdAt);
            return [];
          }),
          datasets: [
            {
              label: "Poids",
              data: userData.flatMap((data) => {
                if (data.weight > 0) return data.weight;
                return [];
              }),
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
          labels: userData.flatMap((data) => {
            if (data.bodyMassIndex > 0) return timestampToDate(data.createdAt);
            return [];
          }),
          datasets: [
            {
              label: "IMC",
              data: userData.flatMap((data) => {
                if (data.bodyMassIndex > 0) return data.bodyMassIndex;
                return [];
              }),
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
  }, []);

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
              Masse graisseuse
            </Link>
            <Link to={"muscle"} className="taux_musculaire">
              Masse musculaire
            </Link>
            <Link to={"eau"} className="taux_d_eau">
              Masse d'eau
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

export default DoctorStats;
