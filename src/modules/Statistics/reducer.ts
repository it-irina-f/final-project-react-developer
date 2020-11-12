import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/AppStore";
import React from "react";

interface StatisticsProps {
  id: number;
  tickAxisX: string;
  amount: number;
  amount2?: number;
}

interface HeightProps {
  [key: number]: HeightItemProps;
}

interface HeightItemProps {
  value1: number;
  value2?: number;
}

export const selectors = {
  login: ({ login }: AppState) => login,
  statistics: ({ statistics }: AppState) => statistics,
};

export const initialState: {
  data: StatisticsProps[];
  width: number;
  height: HeightProps;
  tickLabelsY: string[];
  isLoading: boolean;
} = {
  data: [],
  width: 0,
  height: {},
  isLoading: false,
  tickLabelsY: [],
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setData: (state, { payload }: PayloadAction<StatisticsProps[]>) => {
      const count = payload.length;
      const width = (1260 - 20 * (count + 1)) / count;
      const maxAmount = Math.max(
        ...payload.map((item) => {
          let out = item.amount;
          if (typeof item.amount2 !== "undefined") {
            out = Math.max(item.amount, item.amount2);
          }
          return out;
        })
      );
      const maxTickLabelY =
        maxAmount + 5 * Math.pow(10, Math.floor(Math.log10(maxAmount)) - 1);
      const step = Math.floor(maxTickLabelY / 5);

      const tickLabelsYArray = Array(6)
        .fill(0)
        .map((v, i) => (v + step * i).toLocaleString());

      const heightBars = {};
      payload.forEach((item) => {
        if (typeof item.amount2 !== "undefined") {
          heightBars[item.id] = {
            value1: Math.round((item.amount * 400) / maxTickLabelY),
            value2: Math.round((item.amount2 * 400) / maxTickLabelY),
          };
        } else {
          heightBars[item.id] = {
            value1: Math.round((item.amount * 400) / maxTickLabelY),
          };
        }
      });

      return {
        ...state,
        data: payload,
        width: Math.round(width),
        tickLabelsY: tickLabelsYArray.reverse(),
        height: heightBars,
      };
    },
  },
});

export const { reducer, actions } = statisticsSlice;
