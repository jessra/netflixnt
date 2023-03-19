import { createSlice, configureStore } from '@reduxjs/toolkit'
import moviesReducer from "../features/movies/moviesSlice";
import activoReducer from "../features/movies/activoSlice";
import generoReducer from "../features/movies/generosSlice";
import movieReducer from "../features/movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
    activo: activoReducer,
    genero: generoReducer,
  }
})