import useCountry from "./UseCountry.ts";
import Card from "../../components/Card.tsx";
import * as React from "react";
import List from "../../components/List.tsx";
import {useAppSelector} from "../../app/hooks.ts";
import {selectCountriesInfo} from "./CountyListSlice.ts";

const CountryList: React.FC = () => {
	const {status, error} = useAppSelector(selectCountriesInfo)
	const [countries] = useCountry()

	return (
		<>
			{status === 'received' && (
				<List>
					{countries.map((country) => {
						const countryInfo = {
							img: country.flags.png,
							name: country.name,
							info: [
								{
									title: 'Population',
									description: country.population.toLocaleString(),
								},
								{
									title: 'Region',
									description: country.region,
								},
								{
									title: 'Capital',
									description: country.capital,
								},
							],
						};

						return (
							<Card
								key={country.name}
								// onClick={() => navigate(`/country/${country.name}`)}
								{...countryInfo}
							/>
						);
					})}
				</List>
			)}
			{status === 'rejected' && <p>{error}</p>}
			Country list
		</>
	);
};

export default CountryList;