import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  width: 1260px;
`;

export const ChartAxis = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border-left: 2px solid #c1c0c0;
  border-bottom: 2px solid #c1c0c0;
  align-items: flex-end;
  background: repeating-linear-gradient(
    #dddfdd,
    #dddfdd 0.1em,
    transparent 0.1em,
    transparent 80px
  );
`;

export const ChartTicksLabel = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;
