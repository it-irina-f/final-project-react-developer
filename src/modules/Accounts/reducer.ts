import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/AppStore";

interface AProps {
  [key: string]: AccountsProps;
}

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
    setList: (state, { payload }: PayloadAction<AProps>) => {
      return {
        ...state,
        cash: payload.cash,
        cards: payload.cards,
        deposits: payload.deposits,
      };
    },
    addListItem: (state, { payload }: PayloadAction<AccountsItemProps>) => {
      return {
        ...state,
      };
    },
  },
});

export const { reducer, actions } = accountsSlice;
