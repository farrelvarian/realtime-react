import styled from "styled-components";

const BubbleChatSender = (props) => {
    return (
        <StyledBubbleChatSender>
            <div className="bubble-chat">{props.message}</div>
            <img src={props.image} alt="sender" />
        </StyledBubbleChatSender>
    );
}

export default BubbleChatSender;

export const StyledBubbleChatSender = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  .bubble-chat {
    max-width: 40%;
    margin: 0 15px 0 0;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 35px 10px 35px 35px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #232323;
  }
  img {
    width: 54px;
    height: 54px;
    border-radius: 20px;
  }
`;