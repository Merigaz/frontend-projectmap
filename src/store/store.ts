import { configureStore } from '@reduxjs/toolkit';
import NeighborhoodsCountReducer from './reducers/NeighborhoodsCountReducer';
import DatesCountReducer from './reducers/DatesCountReducer';
import MarkersMapReducer from './reducers/MarkersMapReducer';
import NameMarkersReducer from './reducers/NameMarkersReducer';
import AddressDataReducer from './reducers/AddressDataReducer';


const store = configureStore({
  reducer: {
    NeighborhoodsCount: NeighborhoodsCountReducer,
    DatesCount: DatesCountReducer,
    MarkersMap: MarkersMapReducer,
    NameMarkers: NameMarkersReducer,
    AddressData: AddressDataReducer,
  },
});

export default store;