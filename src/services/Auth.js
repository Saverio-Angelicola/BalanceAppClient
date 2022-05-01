import axios from "axios";

export const login = async (email, password) => {
  const token = (
    await axios.post("https://localhost:49157/api/auth/login", {
      email: email,
      password: password,
    })
  ).data.token;
  localStorage.setItem("jwt", token);
};

export const getRole = async () => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error();
  }

  return (
    await axios.get("https://localhost:49157/api/auth/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).data.role;
};

export const isAuthenticate = async () => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return false;
    }
    await axios.get("https://localhost:49157/api/auth/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return true;
  } catch (err) {
    return false;
  }
};
