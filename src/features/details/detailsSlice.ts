import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ExtraParams} from "../countries/CountyListSlice.ts";
import {Country, CountryItem} from "../../app/appState.ts";

interface DetailsState {
	currentCountry: CountryItem | unknown;
	neighbors: string[];
	status: "idle" | "loading" | "received" | "rejected";
	error: null | string;
}

interface LoadCountryByNameThunkArg {
	name: string;
	extra: ExtraParams;
	data?: Country[];
}

interface LoadNeighborsBorderThunkArg {
	data?: Country[];
	extra: ExtraParams;
}

export const loadCountryByName = createAsyncThunk<LoadCountryByNameThunkArg, string, { extra: ExtraParams }>(
	'@@details/load-country-by-name',
	(name, {extra: {client, api}}) => {
		return client.get(api.searchByCountry(name));
	}
);

export const loadNeighborsBorder = createAsyncThunk<LoadNeighborsBorderThunkArg, string[], { extra: ExtraParams }>(
	'@@details/load-neighbors',
	(borders, {extra: {client, api}}) => {
		return client.get(api.filterByCode(borders))
	}
)

const initialState: DetailsState = {
	currentCountry: null,
	neighbors: [],
	status: 'idle',
	error: null,
}

const detailsSlice = createSlice({
	name: '@@details',
	initialState,
	reducers: {
		clearDetails: () => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountryByName.pending, (state) => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(loadCountryByName.fulfilled, (state, action) => {
				state.status = 'idle'
				state.currentCountry = (action.payload.data && action.payload.data[0]) || []
			})
			.addCase(loadCountryByName.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.error.message || 'Failed to fetch countries'
			})
			.addCase(loadNeighborsBorder.fulfilled, (state, action) => {
				state.neighbors = action.payload.data.map(country => country.name)
			})
	}
})

export const selectCurrentCountry = (state) => state.details.currentCountry
export const selectDetails = (state) => state.details
export const selectNeighbors = (state) => state.details.neighbors

export const {clearDetails} = detailsSlice.actions
export const detailsReducer = detailsSlice.reducer