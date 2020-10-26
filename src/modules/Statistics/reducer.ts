import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/AppStore";

interface StatisticsProps {
  id: number;
  height: number;
  height2?: number;
  tickAxisX: string;
}

export const selectors = {
  login: ({ login }: AppState) => login,
  statistics: ({ statistics }: AppState) => statistics,
};

export const initialState: {
  data: StatisticsProps[];
  width: number;
  isLoading: boolean;
} = {
  data: [],
  width: 0,
  isLoading: false,
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setData: (state, { payload }: PayloadAction<StatisticsProps[]>) => {
      const count = payload.length;
      const width = (1260 - 20 * (count + 1)) / count;
      return {
        ...state,
        data: payload,
        width: Math.round(width),
      };
    },
  },
});

export const { reducer, actions } = statisticsSlice;
