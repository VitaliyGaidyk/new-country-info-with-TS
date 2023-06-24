import {Flex} from "@chakra-ui/react";
import Search from "./Search.tsx";
import CustomSelect from "./CustomSelect.tsx";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectRegion, setRegion} from "./controlsSlice.ts";
import * as React from "react";

export interface ItemsData {
	value: string
	label: string
}

const items: ItemsData[] = [
	{value: 'Africa', label: 'Africa'},
	{value: 'America', label: 'America'},
	{value: 'Asia', label: 'Asia'},
	{value: 'Europe', label: 'Europe'},
	{value: 'Oceania', label: 'Oceania'},
]

const Controls: React.FC = () => {
	const dispatch = useAppDispatch()
	const valueRegion = useAppSelector(selectRegion)

	return (
		<Flex mb='30px'>
			<Search/>
			<CustomSelect items={items}
			              onChange={(newValue) => dispatch(setRegion(newValue))}
			              valueRegion={valueRegion}
			/>
		</Flex>
	);
};

export default Controls;