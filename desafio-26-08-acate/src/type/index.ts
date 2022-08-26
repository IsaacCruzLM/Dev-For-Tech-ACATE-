export interface IProps {
  card:{
    id: string;
    image: string;
    name: string;
    gender: string;
  },
  favorites: number[]
}

export interface IFavorites{
  favorites: number[]
}

export interface IFavoritesState{
  favorites: {
    favorites: number[]
  }
}