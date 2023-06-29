import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

// Buat Slice
const movieSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        moviesLocal: data,
        movies: data,
    },
    reducers: {
        addMovies(state, action) {
            state.moviesLocal.push(action.payload);
        },
        updateMovies(state, action) {
            state.movies = action.payload;
        },
    },
});

// Generate Action dan Reducer
const { addMovies, updateMovies } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addMovies, updateMovies };
export default moviesReducer;
