import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recommend:null,
    newDisney:null

}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
        },
    }
})

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend
export const selectNewDisney = (state) => state.movie.newDisney

export default movieSlice.reducer;

