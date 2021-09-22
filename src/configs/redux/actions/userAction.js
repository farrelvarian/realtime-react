import { io } from "socket.io-client";
import {toastify} from "../../toastify/toastify";
const axios = require("axios");

export const loginUser = (data, history, setSocket) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}auth/login`, data, {
      withCredentials: true,
    })
    .then((result) => {
      const token = result.data.data.token;
      const id = result.data.data.id;
      const name = result.data.data.name;
      const image = result.data.data.image;
      const isAuth = true;
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: "POST_LOGIN", payload: dataUser });
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("image", image);
      localStorage.setItem("isAuth", isAuth);

      const resultSocket = io(
        `${process.env.REACT_APP_BASE_URL}`,
        {
          query: { token: token },
          withCredentials: true,
        }
      );
      setSocket(resultSocket);
      toastify("Success Login. Happy Chatting!", "success");
      history.push("/");
    })
    .catch((error) => {
      console.log(error);
      toastify(error.response?.data?.message, "error");
    });
};
export const registerUser = (data, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}auth/register`, data, {
      withCredentials: true,
    })
    .then((result) => {
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: "POST_REGISTER", payload: dataUser });
      toastify(
        "Success Register. Please check email to verification account",
        "info"
      );
      history.push(`/login`);
    })
    .catch((error) => {
      toastify(error.response?.data?.message, "error");
    });
};

export const forgotPasswordUser = (data,history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}auth/forgotpassword`, data, {
      withCredentials: true,
    })
    .then((result) => {
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: "GET_FORGOTPASSWORD", payload: dataUser });
      console.log(data);
      toastify(
        "Success Forgot Password. Please check email to reset your password",
        "info"
      );
      history.push(`/login`);
    })
    .catch((error) => {
      toastify(error.response?.data?.message, "error");
    });
};

export const resetPasswordUser = (data, token, history) => (dispatch) => {
  // console.log(data);
  axios
    .post(
      `${process.env.REACT_APP_BASE_URL}auth/resetPassword/${token}`,
      data,
      {
        withCredentials: true,
      }
    )
    .then((result) => {
      const dataUser = {
        data: result.data.data.password,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: "POST_RESETPASSWORD", payload: dataUser });
      //   history.push(`/new-password`);
      toastify("success reset password", "success");
      history.push(`/login`);
    })
    .catch((error) => {
      toastify(error.response?.data?.message, "error");
    });
};

export const updateUser = (id,data, image) => (dispatch) => {
  const token = localStorage.getItem("token");
   const formData = new FormData();
   formData.append("name", data.name);
   formData.append("email", data.email);
   formData.append("image", image);
   formData.append("password", data.password);
   formData.append("phone", data.phone);
   formData.append("updateAt", data.updateAt);
console.log(image);
   axios
     .put(`${process.env.REACT_APP_BASE_URL}users/${id}`, formData, {
       headers: {
         Authorization: `Bearer ${token}`,
         withCredentials: true,
       },
     })
     .then((result) => {
       const image = result.data.data.image;
       const name = result.data.data.name;
       const dataUser = {
         data: result.data.data,
         error: result.data.error,
         message: result.data.message,
         status: result.data.status,
       };
       dispatch({ type: "PUT_USER", payload: dataUser });
       localStorage.setItem("image", image);
       localStorage.setItem("name", name);
       toastify(`success update profile`, "success");
     })
     .catch((error) => {
       console.log(error.response.data);
       toastify(error.response.data.message, "error");
     });
};
export const logoutUser = (history) => () => {
localStorage.clear();
history.push(`/login`);
};