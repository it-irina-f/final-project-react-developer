import React, { useState } from "react";
import { Chart } from "@/modules/Statistics/Chart";

import { AppState } from "@/AppStore";
import { statisticsSlice } from "./reducer";
import { connect } from "react-redux";
import { Spinner, Text } from "sancho";

const mapStateToProps = ({ statistics }: AppState) => ({
  ...statistics,
});

const mapDispatchToProps = {};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const StatisticsComponent: React.FC<Props> = ({
  data,
  width,
  height,
  tickLabelsY,
  isLoading,
}) => {
  return (
    <>
      <Text variant="h1">Статистика</Text>
      {isLoading ? (
        <Spinner label="Загрузка данных..." center />
      ) : (
        <Chart
          data={data}
          tickLabelsY={tickLabelsY}
          width={width}
          height={height}
        />
      )}
    </>
  );
};
export const Statistics = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatisticsComponent);
