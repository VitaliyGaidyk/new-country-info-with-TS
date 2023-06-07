import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	search: '',
	region: '',
}

const controlsSlice = createSlice({
	name: '@@control',
	initialState: initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload
		},
		setRegion: (state, action) => {
			state.region = action.payload
		},
		clearControls: () => initialState
	}
})

export const selectSearch = (state) => state.control.search
export const selectRegion = (state) => state.control.region
export const selectControls = (state) => state.control

export const {setSearch, setRegion, clearControls} = controlsSlice.actions
export const controlReducer = controlsSlice.reducer
