import React from "react";
import { IconEdit, IconTrash2, Text, TableRow, TableCell } from "sancho";

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
  return (
    <TickLabelWrapper widthBar={width} offset="20">{bar.tickAxisX}</TickLabelWrapper>
  );
};
