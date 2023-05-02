import {useEffect} from "react";
import {loadCountries, selectCountriesInfo, selectVisibleCountries} from "./CountyListSlice.ts";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectControls} from "../controls/controlsSlice.ts";

const UseCountry = () => {
	const dispatch = useAppDispatch()
	const controls = useAppSelector(selectControls)
	const countries = useAppSelector(state => selectVisibleCountries(state, controls))
	const {status} = useAppSelector(selectCountriesInfo)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(loadCountries())
		}
	}, [dispatch])

	return [countries]
}

export default UseCountry