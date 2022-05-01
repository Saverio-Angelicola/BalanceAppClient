import axios from "axios";

export const getHealthData = async () => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error();
  }
  return (
    await axios.get("https://localhost:49157/api/bodydata", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).data;
};

export const getAllUsers = async () => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error();
  }
  return (await axios.get("https://localhost:49157/api/user", {
    headers: {
      Authorization: "Bearer " + token,
    },
  })).data;
};
