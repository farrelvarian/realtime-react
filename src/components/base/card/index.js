import styled from "styled-components";

const Card = (props) => {
    return (
      <StyledCard onClick={props.onClick}>
        <img src={props.image} alt="profile" />
        <div className="wrapper-text">
          <div className="text-up">
            <h1 className="text-name">{props.name}</h1>
            <h2 className="text-time">{props.time}</h2>
          </div>
          <div className="text-down">
            <h2 className="text-message">{props.message}</h2>
            <h2 className="text-qty">{props.qty}</h2>
          </div>
        </div>
      </StyledCard>
    );
}

export default Card;

export const StyledCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 64px;
    height: 64px;
    border-radius: 20px;
  }
  .wrapper-text {
    width: 75%;
    .text-up {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .text-name {
        margin: 0;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #232323;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .text-time {
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #848484;
      }
    }
    .text-down {
      display: flex;
      justify-content: space-between;

      .text-message {
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #7e98df;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .text-qty {display:none;
        padding: 2px 5px 0 5px;
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
        text-align: center;
        background: #7e98df;
        border-radius: 30px;
      }
    }
  }
`;