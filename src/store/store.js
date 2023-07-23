import { setLocalStorage } from '../utils/localStorage';
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import favoriteSlice from './favoriteSlice'

const rootReducer = combineReducers({
	favorite: favoriteSlice
})

const store = configureStore({
	reducer: rootReducer
})

store.subscribe(() => {
  setLocalStorage('store', store.getState().favorite);
});

export default store