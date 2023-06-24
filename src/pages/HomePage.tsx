import CountryList from "../features/countries/CountryList.tsx";
import Controls from "../features/controls/Controls.tsx";
import React from "react";

const HomePage: React.FC = () => {
	return (
		<>
			<Controls/>
			<CountryList/>
		</>
	);
};

export default HomePage;