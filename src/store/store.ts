import { configureStore } from '@reduxjs/toolkit';
import NeighborhoodsCountReducer from './reducers/NeighborhoodsCountReducer';
import DatesCountReducer from './reducers/DatesCountReducer';


const store = configureStore({
  reducer: {
    NeighborhoodsCount: NeighborhoodsCountReducer,
    DatesCount: DatesCountReducer,
  },
});

export default store;