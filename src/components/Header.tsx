import {Button, Container, Flex, Text, useColorMode, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";
import useControls from "../features/controls/useControls.ts";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
	const [cleanRegion] = useControls()
	const {colorMode, toggleColorMode} = useColorMode()
	const bg = useColorModeValue('white', 'uiBase.100')

	return (
		<Flex padding='20px 0' bg={bg} boxShadow='dark-lg'>
			<Container maxW='container.lg'>
				<Flex justifyContent='space-between'
				      margin='0 auto'
				      alignItems='center'
				>
					<Link to='/'
					      onClick={cleanRegion}
					>
						<Text cursor='pointer'>
							Where is the world?
						</Text>
					</Link>
					<Text>
						<Button onClick={toggleColorMode}>
							Theme {colorMode === 'light' ? 'Dark' : 'Light'}
						</Button>
					</Text>
				</Flex>
			</Container>
		</Flex>
	);
};

export default Header;