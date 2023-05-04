import {useEffect} from 'react';
import {loadNeighborsBorder, selectNeighbors} from "./detailsSlice.ts";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";

const UseNeighbors = (borders: string[]) => {
	const dispatch = useAppDispatch()
	const neighbors = useAppSelector(selectNeighbors)

	useEffect(() => {
		if (borders.length) {
			dispatch(loadNeighborsBorder(borders))
		}

	}, [borders, dispatch])

	return neighbors
};

export default UseNeighbors;