import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import axios from 'axios'
import {countryReducer} from "../features/countries/CountyListSlice.ts";
import {api} from "../config.ts";
import {controlReducer} from "../features/controls/controlsSlice.ts";
import {detailsReducer} from "../features/details/detailsSlice.ts";

export const store = configureStore({
	reducer: {
		countries: countryReducer,
		control: controlReducer,
		details: detailsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api
				}
			},
			serializableCheck: false
		})
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;