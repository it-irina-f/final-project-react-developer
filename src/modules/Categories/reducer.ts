import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/AppStore";

interface CategoriesProps {
  [key: number]: CategoriesItemProps;
}

interface CategoriesItemProps {
  name: string;
  isIncome: boolean;
  isOutgo: boolean;
}

export const selectors = {
  categories: ({ categories }: AppState) => categories,
  login: ({ login }: AppState) => login,
};

export const initialState: {
  categories: CategoriesProps;
  isLoading: boolean;
} = {
  categories: {},
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setList: (state, { payload }: PayloadAction<any>) => {
      console.log('payload', payload);
      return {
        ...state,
        categories: payload,
      };
    },
  },
});

export const { reducer, actions } = categoriesSlice;
