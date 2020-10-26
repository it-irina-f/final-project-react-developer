import styled from "@emotion/styled";

export const BarWrapper = styled.div`
  display: block;
  margin-left: ${(props) => props.offset}px;
  width: ${(props) => props.widthBar}px;
  height: ${(props) => props.heightBar}px;
  background: ${props => props.second ? '#a4d4f7' : '#1d7cd5'} ;
`;
