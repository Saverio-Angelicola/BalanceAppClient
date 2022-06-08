import axios from "axios";

export const editUser = async (email, firstname, lastname, role) => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error();
  }
  try {
    await axios.post(
      `https://balance-app-blaise-pascal.herokuapp.com/api/admin/user/edit`,
      {
        email,
        firstname,
        lastname,
        role,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (err) {
    throw new Error(err);
  }
};

export const getUserById = async (id) => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) {
      throw new Error();
    }
    return (
      await axios.get(
        `https://balance-app-blaise-pascal.herokuapp.com/api/admin/user/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
    ).data;
  } catch (err) {
    throw new Error(err);
  }
};

export const addDoctor = async (doctor) => {
  try {
    const token = localStorage.getItem("jwt");
    await axios.post("https://balance-app-blaise-pascal.herokuapp.com/api/admin/user/add", doctor, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};
