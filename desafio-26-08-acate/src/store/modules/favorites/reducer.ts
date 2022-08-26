import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

import { IFavorites, IFavoritesState } from "../../../type"

const initialState = {
    favorites: []
}

const FavoritesData = createSlice({
    name: 'favoritesData',
    initialState,
    reducers: {
        addFavorite: ( state: IFavorites, action: PayloadAction<number>) => {
            state.favorites = [...state.favorites, action.payload]
        },
        removeFavorite: (state: IFavorites, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter((id) => id != action.payload)
        }
    }
})

export const { addFavorite, removeFavorite } = FavoritesData.actions;

export const favoritesStateData = (state: IFavoritesState) => state.favorites;

export default FavoritesData.reducer;