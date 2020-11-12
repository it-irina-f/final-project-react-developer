import React, { FC } from "react";
import { Bar } from "@/components/Bar";
import { TickLabel } from "@/components/TickLabel";
import {
  ChartWrapper,
  ChartAxisY,
  ChartBars,
  ChartAxisX,
  ChartBarsWrap,
} from "./style";

interface StatisticsProps {
  id: number;
  tickAxisX: string;
  amount: number;
}

interface HeightProps {
  [key: number]: HeightItemProps;
}

interface HeightItemProps {
  value1: number;
  value2?: number;
}

interface Props {
  data: StatisticsProps[];
  width: number;
  height: HeightProps;
  tickLabelsY: string[];
}

export class Chart extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    const width = this.props.width;
    const height = this.props.height;
    const itemData = data.map((row) => (
      <Bar key={row.id} bar={row} width={width} height={height} />
    ));
    const labelTickX = data.map((row) => (
      <TickLabel key={row.id} bar={row} width={width} />
    ));

    const labelTickY = this.props.tickLabelsY.map((row, index) => (
      <span key={index}>{row}</span>
    ));

    return (
      <ChartWrapper>
        <ChartAxisY id="chart-axis-y">{labelTickY}</ChartAxisY>
        <ChartBarsWrap>
          <ChartBars>{itemData}</ChartBars>
          <ChartAxisX id="chart-axis-x">{labelTickX}</ChartAxisX>
        </ChartBarsWrap>
      </ChartWrapper>
    );
  }
}
