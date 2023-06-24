import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";
import React from "react";
import {ItemsData} from "./Controls.tsx";

interface CustomSelectProps {
	items: ItemsData[]
	onChange: (value: string) => void
	valueRegion: string
}

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
	const {items, onChange, valueRegion} = props

	return (
		<Menu>
			<MenuButton as={Button}
			            rightIcon={<BiChevronDown/>}
			            minW='150px'
			>
				{items.find(item => item.value === valueRegion)?.label || 'region...'}
			</MenuButton>
			<MenuList>
				{items.map((option) => (
					<MenuItem key={option.label} onClick={() => onChange(option.value)}>
						{option.value}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default CustomSelect;