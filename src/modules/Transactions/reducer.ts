import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/AppStore";

interface TransactionsProps {
  [key: number]: TransactionsItemProps;
}

interface TransactionsItemProps {
  amount: number;
  category: string;
  account: string;
  isIncome: boolean;
  isOutgo: boolean;
  comment: string;
}

export const selectors = {
  transactions: ({ transactions }: AppState) => transactions,
  login: ({ login }: AppState) => login,
};

export const initialState: {
  transactions: TransactionsProps;
  isLoading: boolean;
} = {
  transactions: {},
  isLoading: false,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setList: (state, { payload }: PayloadAction<any>) => {
      console.log("payload", payload);
      return {
        ...state,
        transactions: payload,
      };
    },
  },
});

export const { reducer, actions } = transactionsSlice;
