import styled from "styled-components";
import { breakpoints } from "../../../configs/breakpoints/breakpoints";

const SectionBlank = () => {
    return (
      <StyledSectionBlank>
        <h1>Please select a chat to start messaging</h1>
      </StyledSectionBlank>
    );
}

export default SectionBlank;

export const StyledSectionBlank = styled.div`
  ${breakpoints.lessThan("lg")`display:none`}
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #848484;
  }
`;