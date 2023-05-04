import UseDetails from "./useDetails";
import {useAppSelector} from "../../app/hooks.ts";
import {selectCountriesInfo} from "../countries/CountyListSlice.ts";
import Info from "./info.tsx";

const CountryDetails = (props) => {
	const {navigate, name} = props
	const {currentCountry} = UseDetails(name)
	const {status} = useAppSelector(selectCountriesInfo)

	return (
		<>
			{status === 'loading' && <h2>Loading...</h2>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</>
	);
};

export default CountryDetails;