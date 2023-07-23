import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/localStorage";
import { omit } from 'lodash';

const initialState = getLocalStorage('store') || {};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setPersonToFavorite(state, action) {
      const newPersonId = Object.keys(action.payload)[0];
      state[newPersonId] = action.payload[newPersonId];
    },
    removePersonFromFavorite(state, action) {
      const personIdToDelete = action.payload;
      return omit(state, personIdToDelete);
    }
  }
});

export default favoriteSlice.reducer;
export const { setPersonToFavorite, removePersonFromFavorite } = favoriteSlice.actions;
