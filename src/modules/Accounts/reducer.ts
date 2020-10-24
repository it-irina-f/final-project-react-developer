import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/AppStore";

interface AccountsProps {
  [key: number]: AccountsItemProps;
}

interface AccountsItemProps {
  name: string;
  currency: string;
  balance: number;
}

export const selectors = {
  accounts: ({ accounts }: AppState) => accounts,
  login: ({ login }: AppState) => login,
};

export const initialState: {
  cash: AccountsProps;
  cards: AccountsProps;
  deposits: AccountsProps;
  isLoading: boolean;
} = {
  cash: {},
  cards: {},
  deposits: {},
  isLoading: false,
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setList: (state, { payload }: PayloadAction<any>) => {
      console.log('payload', payload);
      return {
        ...state,
        cash: payload.cash,
        cards: payload.cards,
        deposits: payload.deposits,
      };
    },
  },
});

export const { reducer, actions } = accountsSlice;
