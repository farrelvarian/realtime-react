import styled from "styled-components";
import Button from "../../components/base/button";
import Input from "../../components/base/input";
import { back, google } from "../../assets";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../configs/redux/actions/userAction";
import { toastify } from "../../configs/toastify/toastify";


const Register = () => {
   const [user, setUser] = useState({
     name: "",
     email: "",
     password: "",
   });

   const dispatch = useDispatch();
   const history = useHistory();

   const handleForm = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value });
   };
   const registerUserClick = () => {
     if (
       user.name === "" ||
       user.email === "" ||
       user.password === ""
     ) {
      toastify(`Error register. All fields must be filled!`, "error");
     } else {
       dispatch(registerUser(user, history));
     }
   };
   const gotoLogin = () => {history.push("/login")};
  return (
    <StyledRegister>
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <img className="back" src={back} alt="back" onClick={gotoLogin}/>
            <h1>Register</h1>
          </div>

          <h2>Let’s create your account!</h2>
          <Input
            htmlFor="Name"
            type="name"
            name="name"
            placeholder="name"
            onChange={(e) => handleForm(e)}
          ></Input>
          <Input
            htmlFor="Email"
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => handleForm(e)}
          ></Input>
          <Input
            htmlFor="Password"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => handleForm(e)}
          ></Input>
          <Button className="default" onClick={registerUserClick}>
            Register
          </Button>
          <div className="divider">
            <hr className="divider-line"></hr>
            <span className="span">Register with</span>
            <hr className="divider-line"></hr>
          </div>
          <Button className="google">
            <img src={google} alt="google" />
            Google
          </Button>
        </div>
      </div>
    </StyledRegister>
  );
};

export default Register;

export const StyledRegister = styled.div`
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
      gap: 35px;
      .header {
        width: 100%;
        display: flex;
        h1 {
          width:100%;
          text-align: center;
          color: #7e98df;
          font-style: Medium;
          font-size: 22px;
          line-height: 26px;
          margin: 0;
        }
      }

      h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin: 0;
      }
      .divider {
        display: flex;
        flex-direction: row;
        /* margin: 2rem 0; */
        justify-content: center;
        align-items: center;
        gap: 2rem;
        .divider-line {
          flex: 1;
          border: 1px solid rgba(57, 57, 57, 0.5);
        }
        .span {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: rgba(57, 57, 57, 0.5);
          text-align: center;
        }
      }
    }
  }
`;
