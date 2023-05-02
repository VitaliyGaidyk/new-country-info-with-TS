import {Box, Flex, Image, Text} from "@chakra-ui/react";
import * as React from "react";

interface CardProps {
	img: string;
	name: string;
	info: {
		title: string;
		description: string;
	}[];
}

const Card: React.FC<CardProps> = (props) => {
	const {img, name, info = []} = props

	return (
		<Box boxShadow='dark-lg' cursor='pointer' overflow='hidden' borderRadius={20}>
			<Image src={img} objectPosition='center' objectFit='cover' height={150} width='100%'/>
			<Box padding='20px 25px'>
				<Box>
					{name}
				</Box>
				<Box listStyleType='none' m={0}>
					{info.map((el) => (
						<Flex key={el.title}>
							<Text>{el.title}:</Text>{el.description}
						</Flex>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Card;