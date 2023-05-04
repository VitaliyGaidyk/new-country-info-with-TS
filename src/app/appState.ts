export type AppState = {
	control: {
		search: string
		region: Region | string
	}
	countries: {
		data?: Country[]
		error: string | null
		status: string
	}
	details: {
		currentCountry: CountryItem
		neighbors: string[]
	}
}

export type Country = {
	capital: string,
	flags: { svg: string, png: string },
	independent: boolean,
	name: string,
	population: number,
	region: Region,
}

export type CountryItem = {
	alpha2Code: string;
	alpha3Code: string;
	altSpellings: string[];
	area: number;
	callingCodes: string[];
	capital: string;
	currencies: {
		code: string;
		name: string;
		symbol: string;
	}[];
	demonym: string;
	flag: string;
	flags: {
		svg: string;
		png: string;
	};
	independent: boolean;
	languages: {
		[key: string]: string;
	}[];
	latlng: [number, number];
	name: string;
	nativeName: string;
	numericCode: string;
	population: number;
	region: string;
	regionalBlocs: {
		acronym: string;
		name: string;
	}[];
	subregion: string;
	timezones: string[];
	topLevelDomain: string[];
	translations: {
		[key: string]: string;
	};
}

export type Region = 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania'