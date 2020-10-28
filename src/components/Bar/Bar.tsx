import React from "react";
import { BarWrapper } from "./style";

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

  //const isDual = false;
  const widthBar = isDual ? width / 2 : width;

  return (
    <>
      <BarWrapper
        widthBar={widthBar}
        heightBar={height[bar.id].value1}
        offset="20"
      ></BarWrapper>
      {isDual ? (
        <BarWrapper
          widthBar={widthBar}
          heightBar={height[bar.id].value2}
          offset="0"
          second
        ></BarWrapper>
      ) : (
        <></>
      )}
    </>
  );
};
