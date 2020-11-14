import React from "react";
import { TickLabelWrapper } from "./style";

interface StatisticsProps {
  id: number;
  tickAxisX: string;
  amount: number;
}

interface Props {
  bar: StatisticsProps;
  width: number;
}

export const TickLabel: React.FC<Props> = ({ bar, width }) => {
  return <TickLabelWrapper widthBar={width}>{bar.tickAxisX}</TickLabelWrapper>;
};
