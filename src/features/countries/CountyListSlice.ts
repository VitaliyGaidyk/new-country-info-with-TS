import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosInstance} from 'axios';
import {Api} from "../../config.ts";
import {AppState, Country, Region} from "../../app/appState.ts";

type ExtraParams = {
	client: AxiosInstance;
	api: Api;
};

type CountryData = {
	data?: Country[]
}

export const loadCountries = createAsyncThunk<CountryData, undefined, { extra: ExtraParams }>(
	'@@countries/load',
	async (_, {
		extra: {client, api}
	}) => {
		return client.get(api.ALL_COUNTRIES)
	}
)

type initialData = {
	status: 'idle' | 'loading' | 'received' | 'rejected';
	error: string | null;
	data: Country[];
}

const initialState: initialData = {
	status: 'idle',
	error: null,
	data: [],
}

const countriesSlice = createSlice({
	name: '@@countries',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountries.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(loadCountries.fulfilled, (state, action) => {
				state.status = 'received'
				state.data = (action.payload && action.payload.data) || []
				state.error = null
			})
			.addCase(loadCountries.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.error.message || 'Failed to fetch countries'
			})
	}
})

type ControlsData = {
	search: string,
	region: Region | string
}

export const selectVisibleCountries = (state: AppState, controls: ControlsData): Country[] => {
	const {search = '', region = ''} = controls

	return state.countries.data.filter(country => (
			country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
		)
	)
}

export const selectCountriesInfo = (state: AppState) => ({
	status: state.countries.status,
	error: state.countries.error,
})


// export const selectControls = (state) => state.control

export const countryReducer = countriesSlice.reducer
