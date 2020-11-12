import React from "react";
import { BarWrapper, BarsWrapper } from "./style";

interface StatisticsProps {
  id: number;
  tickAxisX: string;
}

interface HeightProps {
  [key: number]: HeightItemProps;
}

interface HeightItemProps {
  value1: number;
  value2?: number;
}

interface Props {
  bar: StatisticsProps;
  width: number;
  height: HeightProps;
}

export const Bar: React.FC<Props> = ({ bar, width, height }) => {
  const isDual = typeof height[bar.id].value2 !== "undefined";

  const widthBar = isDual ? width / 2 : width;

  return (
    <BarsWrapper data-id={bar.id}>
      <BarWrapper
        widthBar={widthBar}
        heightBar={height[bar.id].value1}
      ></BarWrapper>
      {isDual ? (
        <BarWrapper
          widthBar={widthBar}
          heightBar={height[bar.id].value2}
          second
        ></BarWrapper>
      ) : (
        <></>
      )}
    </BarsWrapper>
  );
};
