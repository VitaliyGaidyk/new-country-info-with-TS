import {extendTheme, type ThemeConfig} from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}

const theme = extendTheme(
	{config},
	{
		colors: {
			uiBase: {
				100: 'hsl(209, 23%, 22%)',
			},
		},
	}
)

export default theme