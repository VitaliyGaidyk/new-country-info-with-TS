import {clearControls} from "./controlsSlice.ts";
import {useAppDispatch} from "../../app/hooks.ts";

type UseControlsData = [
	() => void
]
const UseControls = (): UseControlsData => {
	const dispatch = useAppDispatch()

	const cleanRegion = () => dispatch(clearControls())

	return [cleanRegion]
};

export default UseControls;