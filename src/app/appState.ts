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
}

export type Country = {
	capital: string,
	flags: { svg: string, png: string },
	independent: boolean,
	name: string,
	population: number,
	region: Region,
}


export type Region = 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania'