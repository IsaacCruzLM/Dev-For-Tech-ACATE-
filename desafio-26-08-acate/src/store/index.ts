import {
configureStore
} from '@reduxjs/toolkit';

import favoritesData from "./modules/favorites/reducer";

const store = configureStore({
    reducer: {
        favorites: favoritesData
    }
})

export default store;