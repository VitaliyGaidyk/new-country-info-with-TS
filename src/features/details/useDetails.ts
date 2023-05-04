import {useEffect} from 'react';
import {clearDetails, loadCountryByName, selectDetails} from "./detailsSlice.ts";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";

const UseDetails = (name: string) => {
	const dispatch = useAppDispatch()
	const details = useAppSelector(selectDetails);

	useEffect(() => {
		dispatch(loadCountryByName(name))

		return () => {
			dispatch(clearDetails())
		}
	}, [name, dispatch])

	return details;
};

export default UseDetails;