import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   recomended:null,
   newDisney:null,
   orignal:null,
   trending:null,
};

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action)=>{ 
            state.recomended = action.payload.recomended;
            state.newDisney = action.payload.newDisney;
            state.trending = action.payload.trending;
            state.orignal = action.payload.orignal;
            
        }
    },
});
export const {setMovies} = movieSlice.actions;
export const selectRcommend = (state) => state.user.recomended;
export const selectTrending = (state) => state.user.trending;
export const selectOriginals = (state) => state.user.orignal;
export const selectNewDisney = (state) => state.user.newDisney;
export default movieSlice.reducer;