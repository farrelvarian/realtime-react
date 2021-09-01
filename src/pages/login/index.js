import styled from "styled-components";
import Button from "../../components/base/button";
import Input from "../../components/base/input";
import { google } from "../../assets";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../configs/redux/actions/userAction";

const Login = ({setSocket, ...props }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleForm = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loginUserClick = () => {
    dispatch(loginUser(user, history, setSocket));
    
  };

  return (
    <StyledLogin>
      <div className="container">
        <div className="wrapper">
          <h1>Login</h1>
          <h2>Hi, Welcome back!</h2>
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
          <a className="forgot" href="/forgot-password">
            Forgot password?
          </a>
          <Button className="default" onClick={loginUserClick}>
            Login
          </Button>
          <div className="divider">
            <hr className="divider-line"></hr>
            <span className="span">Login with</span>
            <hr className="divider-line"></hr>
          </div>
          <Button className="google">
            <img src={google} alt="google" />
            Google
          </Button>
          <h2 className="signup">
            Don’t have an account? <a href="/register">Sign Up</a>
          </h2>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
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
      h1 {
        text-align: center;
        color: #7e98df;
        font-style: Medium;
        font-size: 22px;
        line-height: 26px;
        margin: 0;
      }
      h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin: 0;
      }
      a {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-decoration: none;
      }
      .forgot {
        align-self: flex-end;
        color: #7e98df;
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
      .signup {
        text-align: center;
        a {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          margin: 0;
          color: #7e98df;
          text-decoration: none;
        }
      }
    }
  }
`;
