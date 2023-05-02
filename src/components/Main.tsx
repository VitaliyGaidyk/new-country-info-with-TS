import {Container, ContainerProps} from "@chakra-ui/react";
import * as React from "react";

const Main: React.FC<ContainerProps> = (props) => {
	const {children} = props

	return (
		<Container maxW={1240} paddingTop='4rem'>
			{children}
		</Container>
	);
};

export default Main;