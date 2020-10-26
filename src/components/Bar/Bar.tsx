import React from "react";
import {
  IconEdit,
  IconTrash2,
  Text,
  TableRow,
  TableCell,
  Spinner,
} from "sancho";

import { BarWrapper } from "./style";
import { Chart } from "@/modules/Statistics";

interface StatisticsProps {
  id: number;
  height: number;
  height2?: number;
  tickAxisX: string;
}

interface Props {
  bar: StatisticsProps;
  width: number;
}

export const Bar: React.FC<Props> = ({ bar, width }) => {
  const isDual = typeof bar.height2 !== "undefined";
  const widthBar = isDual ? width / 2 : width;

  return (
    <>
      <BarWrapper
        widthBar={widthBar}
        heightBar={bar.height}
        offset="20"
      ></BarWrapper>
      {isDual ? (
        <BarWrapper
          widthBar={widthBar}
          heightBar={bar.height2}
          offset="0"
          second
        ></BarWrapper>
      ) : (
        <></>
      )}
    </>
  );
};
