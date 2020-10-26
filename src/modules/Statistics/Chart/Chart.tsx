import React, { FC } from "react";
import { Bar } from "@/components/Bar";
import { TickLabel } from "@/components/TickLabel";
import { ChartWrapper, ChartAxis, ChartTicksLabel } from "./style";

interface StatisticsProps {
  id: number;
  height: number;
  height2?: number;
  tickAxisX: string;
}

interface Props {
  data: StatisticsProps[];
  width: number;
}

export class Chart extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    const width = this.props.width;
    const itemData = data.map((row) => (
      <Bar key={row.id} bar={row} width={width} />
    ));
    const itemLabelTick = data.map((row) => (
      <TickLabel key={row.id} bar={row} width={width} />
    ));
    return (
      <ChartWrapper>
        <ChartAxis>{itemData}</ChartAxis>
        <ChartTicksLabel>{itemLabelTick}</ChartTicksLabel>
      </ChartWrapper>
    );
  }
}
