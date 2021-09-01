import styled from "styled-components";
import { editProfile, logout, menu, plus, search } from "../../../assets";

const SidebarMain = (props) => {
  return (
    <StyledSidebarMain>
      <div className="wrapper-mainmenu">
        <h1>Telegram</h1>
        <div className="dropdown">
          <button>
            <img src={menu} alt="menu" />
          </button>
          <div className="dropdown-content">
            <button onClick={props.editProfile}>
              <img src={editProfile} alt="menu" />
            </button>
            <button onClick={props.logout}>
              <img src={logout} alt="menu" />
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper-search">
        <img className="search" src={search} alt="search" />
        <input type="text" name="search" placeholder="Type the name..." onChange={props.onChange}/>
        <button>
          <img src={plus} alt="plus" />
        </button>
      </div>
      <div className="wrapper-button">
        <button className="btn disabled">All</button>
        <button className="btn active">Important</button>
        <button className="btn disabled">Unread</button>
      </div>
      <div className="wrapper-contacts">{props.children}</div>
    </StyledSidebarMain>
  );
};

export default SidebarMain;

export const StyledSidebarMain = styled.div`
  width: 25%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper-mainmenu {
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 43px;
    margin-bottom: 50px;
    h1 {
      margin: 0;
      font-style: normal;
      font-weight: 600;
      font-size: 29px;
      line-height: 34px;
      letter-spacing: -0.165px;
      color: #7e98df;
    }
    .dropdown {
      position: relative;
      display: inline-block;
      button {
        width: 34px;
        height: 34px;
        border: unset;
        background-color: transparent;
      }
      .dropdown-content {
        margin-right:0px;
        border-radius: 15px;
        padding: 15px;
        gap: 30px;
        display: none;
        position: absolute;
        background-color: #7e98df;
        /* min-width: 160px; */
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        left: auto;
        right: 100%;
        top: 0;
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          border: unset;
          background-color: transparent;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
      .dropdown-content a:hover {
        background-color: #ddd;
      }
    }
    .dropdown:hover .dropdown-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .wrapper-search {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    img.search {
      position: absolute;
      padding-left: 20px;
    }
    input {
      padding-left: 50px;
      width: 90%;
      height: 60px;
      border: unset;
      background: #fafafa;
      border-radius: 15px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #848484;
      &:focus {
        outline: none;
      }
    }
    button {
      justify-self: flex-end;
      width: 34px;
      height: 34px;
      border: unset;
      background-color: transparent;
    }
  }
  .wrapper-button {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
    .btn {
      height: 50px;
      border-radius: 20px;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      border: unset;
    }
    .active {
      color: #ffffff;
      background: #7e98df;
    }
    .disabled {
      color: #232323;
      background: #ffffff;
    }
  }
  .wrapper-contacts {
    overflow-y: auto;
    width: 90%;
  }
`;
