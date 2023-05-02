import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";


const CustomSelect = (props) => {
	const {items, onChange, value} = props

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BiChevronDown/>} minW='150px'>
				{items.find(item => item.value === value)?.label || 'region...'}
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