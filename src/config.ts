export type Api = {
	ALL_COUNTRIES: string;
	searchByCountry: (name: string) => string;
	filterByCode: (codes: string[]) => string;
}

const BASE_URL = 'https://restcountries.com/v2/'

export const api: Api = {
	ALL_COUNTRIES: BASE_URL + 'all?fields=name,capital,flags,population,region',
	searchByCountry: (name: string) => BASE_URL + `name/${name}`,
	filterByCode: (codes: string[]) => BASE_URL + `alpha?codes=${codes.join(',')}`
}
