import { configureStore } from '@reduxjs/toolkit';
import NeighborhoodsCountReducer from './reducers/NeighborhoodsCountReducer';
import DatesCountReducer from './reducers/DatesCountReducer';
import MarkersMapReducer from './reducers/MarkersMapReducer';
import NameMarkersReducer from './reducers/NameMarkersReducer';
import AddressDataReducer from './reducers/AddressDataReducer';
import PlacesVoteReducer from './reducers/PlacesVoteReducer';
import PlacesMarkersReducer from './reducers/PlacesMarkersReducer';
import PlacesNameReducer from './reducers/PlacesNameReducer';
import PlacesReducer from './reducers/PlacesReducer';
import editPlacesReduxer from './reducers/editPlacesReduxer';


const store = configureStore({
  reducer: {
    NeighborhoodsCount: NeighborhoodsCountReducer,
    DatesCount: DatesCountReducer,
    MarkersMap: MarkersMapReducer,
    NameMarkers: NameMarkersReducer,
    AddressData: AddressDataReducer,
    PlacesVote: PlacesVoteReducer,
    PlacesMarkers: PlacesMarkersReducer,
    PlacesName: PlacesNameReducer,
    Places: PlacesReducer,
    EditPlace: editPlacesReduxer
  },
});

export default store;