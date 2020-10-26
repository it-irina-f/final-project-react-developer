import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { statisticsSaga } from "./saga";

export const getStatisticsModule = (): ISagaModule<typeof reducer> => ({
  id: "statistics",
  reducerMap: {
    statistics: reducer,
  },
  sagas: [statisticsSaga],
});
