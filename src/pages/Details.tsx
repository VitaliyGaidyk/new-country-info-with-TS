import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';
import CountryDetails from "../features/details/CountryDetails";
import {Box, Button} from "@chakra-ui/react";
import React from "react";

export const Details: React.FC = () => {
	const navigate = useNavigate();
	const {name} = useParams();

	return (
		<Box>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack/> Back
			</Button>
			<CountryDetails name={name} navigate={navigate}/>
		</Box>
	);
};
