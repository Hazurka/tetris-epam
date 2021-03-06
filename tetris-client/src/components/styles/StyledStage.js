import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  @media (min-width: 1000px) {
    grid-template-rows: repeat(
      ${props => props.height},
      calc(22vw / ${props => props.width})
    )
  }
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
  border:3px solid teal;
`;
