import UseDetails from "./useDetails";
import {useAppSelector} from "../../app/hooks.ts";
import {selectCountriesInfo} from "../countries/CountyListSlice.ts";
import Info from "./info.tsx";
import React from "react";

interface CountryDetailsProps {
	name: string
	navigate: (item) => void
}

const CountryDetails: React.FC<CountryDetailsProps> = (props: CountryDetailsProps) => {
	const {navigate, name} = props
	const {currentCountry} = UseDetails(name)
	const {status} = useAppSelector(selectCountriesInfo)
	console.log(currentCountry)
	return (
		<>
			{status === 'loading' && <h2>Loading...</h2>}
			{currentCountry && <Info navigate={navigate} {...currentCountry} />}
		</>
	);
};

export default CountryDetails;