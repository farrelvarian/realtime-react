import styled from "styled-components";

const BubbleChatReceiver = (props) => {
    return (
      <StyledBubbleChatReceiver>
        <img src={props.image} alt="receiver" />
        <div className="bubble-chat">{props.message}</div>
      </StyledBubbleChatReceiver>
    );
}

export default BubbleChatReceiver;

export const StyledBubbleChatReceiver = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  img {
    width: 54px;
    height: 54px;
    border-radius: 20px;
  }
  .bubble-chat {
    max-width: 40%;
    margin: 0 0 0 15px;
    padding: 20px;
    background-color: #7e98df;
    border-radius: 10px 35px 35px 35px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #ffffff;
  }
`;