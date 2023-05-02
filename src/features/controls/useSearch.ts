import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectSearch, setSearch} from "./controlsSlice.ts";
import * as React from "react";

type UseSearchResult = [
	string,
	(event: React.ChangeEvent<HTMLInputElement>) => void
];

const UseSearch = (): UseSearchResult => {
	const dispatch = useAppDispatch()
	const search = useAppSelector(selectSearch)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearch(e.target.value))
	}

	return [search, handleSearch]
};

export default UseSearch;