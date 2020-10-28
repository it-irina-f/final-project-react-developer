import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin-top: 40px;
`;

export const ChartAxisY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: calc(100% - 1260px);
  height: 410px;
  padding-right: 10px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  color: #574c4c;
`;

export const ChartBarsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1260px;
  height: 500px;
  margin-top: 5px;
`;

export const ChartBars = styled.div`
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

export const ChartAxisX = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;
