import styled from "styled-components";

const Input = (props) => {
  return (
    <StyledInput>
      <label htmlFor={props.htmlFor}>{props.htmlFor}</label>
      <input
        className={props.className}
        id={props.htmlFor}
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <div className="line" />
    </StyledInput>
  );
};

export default Input;

export const StyledInput = styled.div`
  width: 100%;
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #9f9f9f;
  }
  input {
    width: 100%;
    height: 44px;
    border: unset;
    background-color: transparent;
    font-style: medium;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #232323;

    &:focus {
      outline: none;
    }
  }
  .line {
    border: 1px solid black;
  }
`;
