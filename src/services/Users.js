import axios from "axios";

export const getHealthData = async () => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error();
  }
  return (
    await axios.get("https://balance-app-blaise-pascal.herokuapp.com/api/bodydata", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).data.bodydatas;
};

export const getAllUsers = async () => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error();
  }
  return (await axios.get("https://balance-app-blaise-pascal.herokuapp.com/api/user", {
    headers: {
      Authorization: "Bearer " + token,
    },
  })).data;
};

export const getBodyDataById = async (id)=>{
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error();
  }
  return (
    await axios.get(`https://balance-app-blaise-pascal.herokuapp.com/api/doctor/user/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).data.bodydatas;
}
