import styled from "styled-components";

const SectionBlank = () => {
    return (
      <StyledSectionBlank>
        <h1>Please select a chat to start messaging</h1>
      </StyledSectionBlank>
    );
}

export default SectionBlank;

export const StyledSectionBlank = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#FAFAFA;
   h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #848484;
  }
`;