import styled from "styled-components";
import {
  media,
  profileMenu,
  send,
  sticker,
  videoCall,
} from "../../../assets";

const SectionChatroom = (props) => {
  return (
    <StyledSectionChatroom>
      <div className="wrapper-header">
        <div className="wrapper-profile">
          <img className="avatar" src={props.avatar} alt="avatar" />
          <div className="wrapper-text">
            <h1 className="header-name">{props.username}</h1>
            <h2 className="header-status">{props.status}</h2>
          </div>
        </div>
        <button>
          <img src={profileMenu} alt="profile-menu" onClick={props.profileMenu}/>
        </button>
      </div>
      <div className="body-chat">{props.children}</div>
      <div className="wrapper-footer">
        <div className="wrapper-chat">
          <input
            type="text"
            name={props.inputName}
            value={props.value}
            onChange={props.onChange}
            placeholder="Type your message..."
            autoComplete="off"
          />
          <div className="wrapper-button">
            <button onClick={props.onClick}>
              <img src={send} alt="send" />
            </button>
            <img className="media" src={media} alt="media" />
            <img className="sticker" src={sticker} alt="sticker" />
            <img className="video-call" src={videoCall} alt="video-call" />
          </div>
        </div>
      </div>
    </StyledSectionChatroom>
  );
};

export default SectionChatroom;

export const StyledSectionChatroom = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
  .wrapper-header {
    width: 100%-104px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 52px;
    background-color: #ffffff;
    .wrapper-profile {
      display: flex;
      align-items: center;
      img {
        width: 64px;
        height: 64px;
        border-radius: 20px;
      }
      .wrapper-text {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        .header-name {
          margin: 0;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: #232323;
          margin-bottom: 10px;
        }
        .header-status {
          margin: 0;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 18px;
          color: #7e98df;
        }
      }
    }
    button {
      justify-self: flex-end;
      width: 34px;
      height: 34px;
      border: unset;
      background-color: transparent;
      img {
        width: 20px;
        height: 20px;
        border-radius: 0;
      }
    }
  }
  .body-chat {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: auto;
    width: 100%-104px;
    height: 100%;
    gap: 20px;
    padding: 0 52px;
  }
  .wrapper-footer {
    width: 100%-104px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 52px;
    background-color: #ffffff;
    .wrapper-chat {
      width: 100%;
      display: flex;
      align-items: center;
      input {
        padding-left: 30px;
        width: 100%;
        height: 60px;
        background: #fafafa;
        border-radius: 15px;
        border: unset;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #848484;
        &:focus {
          outline: none;
        }
      }
      .wrapper-button {
        position: absolute;
        display: flex;
        justify-content: center;
        gap: 23px;
        right: 82px;
        button {
          justify-self: flex-end;
          width: 34px;
          height: 34px;
          border: unset;
          background-color: transparent;
          img {
            width: 34px;
            height: 34px;
          }
        }
      }
    }
  }
`;
