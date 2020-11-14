import styled from "styled-components";

export const BarsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 20px;
`;

export const BarWrapper = styled.span`
  display: block;
  width: ${(props) => props.widthBar}px;
  height: ${(props) => props.heightBar}px;
  background: ${(props) => (props.second ? "#a4d4f7" : "#1d7cd5")};
`;
