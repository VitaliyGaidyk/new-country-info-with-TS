import CountryList from "../features/countries/CountryList.tsx";
import Controls from "../features/controls/Controls.tsx";

const HomePage = () => {
	return (
		<>
			<Controls/>
			<CountryList/>
		</>
	);
};

export default HomePage;