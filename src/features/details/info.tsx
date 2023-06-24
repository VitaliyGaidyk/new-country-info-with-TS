import React from 'react';
import {Box, Flex, Grid, Heading, Image, ListItem, Stack, Text, UnorderedList, Wrap} from "@chakra-ui/react";
import useNeighbors from "./useNeighbors.ts";
import {CountryItem} from "../../app/appState.ts";

interface InfoProps extends CountryItem {
	navigate: (item) => void
}

const Info: React.FC = (props: InfoProps) => {
	const {
		name,
		nativeName,
		flag,
		capital,
		population,
		region,
		subregion,
		topLevelDomain,
		currencies = [],
		languages = [],
		navigate,
		borders = []
	} = props
	const neighbors = useNeighbors(borders)

	return (
		<Grid gridTemplateColumns={{md: 'minmax(100px, 400px) 1fr;', xl: 'minmax(400px, 600px) 1fr'}}
		      gap='10'
		      marginTop='3'
		      width='100%'
		      mt='50px'
		>
			<Image objectFit='contain' display='block' src={flag} alt={name}/>
			<Box>
				<Heading as='h2' size='2xl'>
					{name}
				</Heading>
				<Stack gap={{base: 2, xl: 4}}
				       flexDirection={{xl: 'row'}}
				>
					<UnorderedList listStyleType='none'
					               m='0'
					>
						<ListItem fontSize='xl'>
							<b>Native Name: </b>{nativeName}
						</ListItem>
						<ListItem fontSize='xl'>
							<b>Population: </b>{population}
						</ListItem>
						<ListItem fontSize='xl'>
							<b>Region: </b>{region}
						</ListItem>
						<ListItem fontSize='xl'>
							<b>Sub region: </b> {subregion}
						</ListItem>
						<ListItem fontSize='xl'>
							<b>Capital: </b> {capital}
						</ListItem>
					</UnorderedList>
					<UnorderedList listStyleType='none' m='0'>
						<ListItem fontSize='xl'>
							<b>Top Level Domain: </b>
							{topLevelDomain.map((item) => (
								<span key={item}>
									{item}
								</span>
							))}
						</ListItem>
						<ListItem fontSize='xl'>
							<b>Currency: </b>
							{currencies.map((item) => (
								<span key={item.code}>
									{item.name}
								</span>
							))}
						</ListItem>
						<ListItem fontSize='xl'>
							<b>Top Level Domain</b>{' '}
							{languages.map((item) => (
								<span key={item.name}>
									{item.name}
								</span>
							))}
						</ListItem>
					</UnorderedList>
				</Stack>
				<Text fontSize='xl'>
					<b>Border Countries:</b>
				</Text>
				{!borders.length ? (
					<span>There is no border countries</span>
				) : (
					<Wrap pb='10px'>
						{neighbors.map((item) => (
							<Flex cursor='pointer'
							      p='2'
							      boxShadow='base'
							      lineHeight='1.5'
							      key={item}
							      onClick={() => navigate(`/country/${item}`)}>
								{item}
							</Flex>
						))}
					</Wrap>
				)}
			</Box>
		</Grid>
	);
};

export default Info