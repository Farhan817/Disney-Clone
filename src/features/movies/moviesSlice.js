import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recommend: null,
    newDisney: null,
    orignal: null,
    trending: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.orignal = action.payload.orignal;
            state.trending = action.payload.trending;
        },
    },
});
export const { setMovies } = movieSlice.actions;
export const selectRecommend = (state) => state.movie.recommend;
export const selectTrending = (state) => state.movie.trending;
export const selectOriginals = (state) => state.movie.orignal;
export const selectNewDisney = (state) => state.movie.newDisney;
export default movieSlice.reducer;