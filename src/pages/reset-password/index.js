import styled from "styled-components";
import Button from "../../components/base/button";
import Input from "../../components/base/input";
import { back} from "../../assets";
import { useHistory, useParams } from "react-router-dom";
import { resetPasswordUser } from "../../configs/redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toastify } from "../../configs/toastify/toastify";

const ResetPassword = () => {
  let { token } = useParams();
    const [user, setUser] = useState({
      password: "",
      verifyPassword: "",
    });
  const dispatch = useDispatch();
  const history=useHistory()

   const handleForm = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value });
   };

     const resetPasswordClick = () => {
        if (user.password !== user.verifyPassword) {
     toastify("password not match", "error");}
      else{    const setPassword = { newPassword: user.password };
    dispatch(resetPasswordUser(setPassword, token, history));}
    
     };

  const gotoLogin = () => {
  history.push("/login");
};
  return (
    <StyledResetPassword>
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <img className="back" src={back} alt="back" onClick={gotoLogin} />
            <h1>Forgot Password</h1>
          </div>

          <h2>Reset your password </h2>

          <Input
            htmlFor="New Password"
            type="password"
            name="password"
            placeholder="New Password"
            onChange={(e) => handleForm(e)}
          ></Input>

          <Input
            htmlFor="Verify Password"
            type="password"
            name="verifyPassword"
            placeholder="Verify Password"
            onChange={(e) => handleForm(e)}
          ></Input>

          <Button className="default" onClick={resetPasswordClick}>
            Send
          </Button>
        </div>
      </div>
    </StyledResetPassword>
  );
};

export default ResetPassword;

export const StyledResetPassword = styled.div`
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
