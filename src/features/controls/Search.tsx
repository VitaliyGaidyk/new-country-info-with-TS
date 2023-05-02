import useSearch from "./useSearch.ts";
import {Input, InputGroup, InputProps} from "@chakra-ui/react";
import * as React from "react";

const Search: React.FC = () => {
	const [search, handleSearch] = useSearch()

	const inputProps: InputProps = {
		value: search,
		onChange: handleSearch as React.ChangeEventHandler<HTMLInputElement>,
		placeholder: "Search...",
	};

	return (
		<InputGroup>
			<Input maxW='200px' {...inputProps}/>
		</InputGroup>
	);
};

export default Search;