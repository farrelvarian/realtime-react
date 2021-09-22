/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import Button from "../../components/base/button";
import Input from "../../components/base/input";
import { back, avatar } from "../../assets";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { updateUser } from "../../configs/redux/actions/userAction";
import { toastify } from "../../configs/toastify/toastify";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const EditProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [user, setUser] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
    phone: "",
    updateAt: new Date(),
  });

  const [imageUser, setImage] = useState("");
  let imagePreview = "";

  if (!imageUser) {
    imagePreview = user.image;
  } else {
    imagePreview = URL.createObjectURL(imageUser[0]);
  }
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          withCredentials: true,
        },
      })
      .then((response) => {
        const [result] = response.data.data;
        setUser(result);
      })
      .catch(console.error());
  }, []);
  const handleForm = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    setImage(e.target.files);
  };
  const updateUserByid = () => {
    dispatch(updateUser(id, user, imageUser[0]));
  };
  const deleteUserByid = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            axios
              .delete(`${process.env.REACT_APP_BASE_URL}users/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  withCredentials: true,
                },
              })
              .then((response) => {
                toastify(`Bye-bye we will miss you!`, "success");
                localStorage.clear();
                history.push(`/login`);
              })
              .catch((error) => {
                toastify(error.response.data.message, "error");
              }),
        },
        {
          label: "No",
          onClick: () => toastify(`thank you for still believing us`, "info"),
        },
      ],
    });
  };
  const gotoHome = () => {
    history.push("/");
  };
  return (
    <StyledEditProfile>
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <img className="back" src={back} alt="back" onClick={gotoHome} />
            <h1>Edit Profile</h1>
          </div>
          <h2>Edit your profile!</h2>
          <label htmlFor="select-image">
            <img
              className="avatar"
              src={imagePreview ? imagePreview : avatar}
              alt="profile"
            />
          </label>
          <input
            type="file"
            className="select-image-btn"
            id="select-image"
            onChange={(e) => onFileChange(e)}
          />
          <Input
            className="input"
            htmlFor="Name"
            type="name"
            name="name"
            placeholder="name"
            value={user.name}
            onChange={(e) => handleForm(e)}
          ></Input>
          <Input
            className="input"
            htmlFor="Email"
            type="email"
            name="email"
            placeholder="email"
            value={user.email}
            onChange={(e) => handleForm(e)}
          ></Input>
          <Input
            className="input"
            htmlFor="phone"
            type="phone"
            name="phone"
            placeholder="phone"
            value={user.phone}
            onChange={(e) => handleForm(e)}
          ></Input>
          <Button className="default" onClick={updateUserByid}>
            Update Profile
          </Button>
          <Button className="google" onClick={deleteUserByid}>
            Delete Profile
          </Button>
        </div>
      </div>
    </StyledEditProfile>
  );
};

export default EditProfile;

export const StyledEditProfile = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 500px;
    height: 710px;
    border-radius: 30px;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    .wrapper {
      width: 70%;
      height: 625px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      .header {
        width: 100%;
        display: flex;
        h1 {
          width: 100%;
          text-align: center;
          color: #7e98df;
          font-style: Medium;
          font-size: 22px;
          line-height: 26px;
          margin: 0;
        }
      }
      h2 {
        align-self: flex-start;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin: 0;
      }
      img.avatar {
        width: 100px;
        height: 100px;
        justify-self: center;
        border-radius: 15px;
      }
      input.select-image-btn {
        display: none;
      }
    }
  }
`;
