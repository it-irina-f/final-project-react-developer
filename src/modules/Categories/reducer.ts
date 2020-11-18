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
    setList: (state, { payload }: PayloadAction<CategoriesProps>) => {
      return {
        ...state,
        categories: payload,
      };
    },
    addListItem: (state, { payload }: PayloadAction<CategoriesItemProps>) => {
      const categories = {};
      categories[Date.now()] = payload;

      Object.assign(state.categories, categories);

      return state;
    },
  },
});

export const { reducer, actions } = categoriesSlice;
