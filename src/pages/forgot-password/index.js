import styled from "styled-components";
import Button from "../../components/base/button";
import Input from "../../components/base/input";
import { back} from "../../assets";
import { useHistory } from "react-router-dom";
import { forgotPasswordUser } from "../../configs/redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ForgotPassword = () => {
    const [user, setUser] = useState({
      email: "",
    });
  const dispatch = useDispatch();
  const history=useHistory()

   const handleForm = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value });
   };

     const forgotPasswordClick = () => {
          dispatch(forgotPasswordUser(user,history)); 
     };

  const gotoLogin = () => {
  history.push("/login");
};
  return (
    <StyledForgotPassword>
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <img className="back" src={back} alt="back" onClick={gotoLogin} />
            <h1>Forgot Password</h1>
          </div>

          <h2>You’ll get messages soon on your e-mail </h2>

          <Input
            htmlFor="Email"
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => handleForm(e)}
          ></Input>

          <Button className="default" onClick={forgotPasswordClick}>
            Send
          </Button>
        </div>
      </div>
    </StyledForgotPassword>
  );
};

export default ForgotPassword;

export const StyledForgotPassword = styled.div`
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
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin: 0;
      }
 
    }
  }
`;
