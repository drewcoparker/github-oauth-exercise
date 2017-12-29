import { combineReducers } from 'redux';
import { fetchItemsError, isLoading, items } from './reducers';

// Combine all pieces of state into one store
const masterReducer = combineReducers({
    fetchItemsError,
    isLoading,
    items
});

export default masterReducer;
