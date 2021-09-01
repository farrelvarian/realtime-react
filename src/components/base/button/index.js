import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledButton>
      <button className={props.className} onClick={props.onClick}>
        {props.children}
      </button>
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.div`
  width: 100%;
  height: 60px;
  button {
      display:flex;
      justify-content: center;
      align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 70px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  .default {
    color: white;
    background-color: #7e98df;
    border: unset;
  }
  .google {
    gap: 20px;
    color: #7e98df;
    background-color: white;
    border: 1px solid #7e98df;
  }
`;