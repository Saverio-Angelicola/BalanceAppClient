import axios from "axios";

export const registerUser = async (user) => {
  return (
    await axios.post(
      "https://balance-app-blaise-pascal.herokuapp.com/api/auth/register",
      user
    )
  ).data.email;
};

export const login = async (email, password) => {
  return (
    await axios.post(
      "https://balance-app-blaise-pascal.herokuapp.com/api/auth/login",
      {
        email: email,
        password: password,
      }
    )
  ).data.token;
};

export const getProfile = async () => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error();
  }

  return (
    await axios.get(
      "https://balance-app-blaise-pascal.herokuapp.com/api/auth/profile",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
  ).data;
};

export const isAuthenticate = async () => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return false;
    }
    await axios.get(
      "https://balance-app-blaise-pascal.herokuapp.com/api/auth/profile",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return true;
  } catch (err) {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("jwt");
};

export const setToken = (token) => {
  localStorage.setItem("jwt", token);
};

export const getToken = () => {
  return localStorage.getItem("jwt");
};
