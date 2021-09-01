import styled from "styled-components";
import { back } from "../../../assets";

const SidebarProfile = (props) => {
  return (
    <StyledSidebarProfile>
     
        <div className="header">
          <img className="back" src={back} alt="back" onClick={props.back} />
          <h1>{props.name}</h1>
        </div>
        <img className="avatar" src={props.avatar} alt="profile" />
        <h1>{props.name}</h1>
        <h3>{props.status}</h3>
        <h2>Phone number</h2>
        <h3>{props.phone}</h3>
      
    </StyledSidebarProfile>
  );
};

export default SidebarProfile;

export const StyledSidebarProfile = styled.div`


    width: 20%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
      margin-top: 46px;
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
    img.avatar {
      margin-top: 53px;
      width: 100px;
      height: 100px;
      justify-self: center;
      border-radius: 15px;
    }
    h1 {
      text-align: left;
      margin: 25px 0 0 0;
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      color: #232323;
    }
    h2 {
      text-align: left;
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      line-height: 23px;
      color: #232323;
    }
    h3 {
      justify-self:flex-start;
      margin: 10px 0 0 0;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #232323;
    }
  
`;