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
    addListItem: (state, { payload }: PayloadAction<AProps>) => {
      const cash = { ...state.cash };
      const cards = { ...state.cards };
      const deposits = { ...state.deposits };

      if (typeof payload.cash !== "undefined") {
        Object.assign(cash, payload.cash);
      }

      if (typeof payload.cards !== "undefined") {
        Object.assign(cards, payload.cards);
      }

      if (typeof payload.deposits !== "undefined") {
        Object.assign(deposits, payload.deposits);
      }

      return {
        ...state,
        cash: cash,
        cards: cards,
        deposits: deposits,
      };
    },
  },
});

export const { reducer, actions } = accountsSlice;
