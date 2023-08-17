// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeStory: null
}

export const story = createSlice({
    name: 'story',
    initialState,
    reducers: {
        setActiveStory: (state, action) => {
            state.activeStory= action.payload;
        },
        removeActiveStory: (state) => {
            state.activeStory= initialState.activeStory
        },
    },
})

export const {
    setActiveStory , removeActiveStory
} = story.actions;

export default story.reducer;