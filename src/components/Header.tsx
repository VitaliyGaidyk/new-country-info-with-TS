import {Button, Container, Flex, Text, useColorMode, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";
import useControls from "../features/controls/useControls.ts";

const Header: React.FC = () => {
	const [cleanRegion] = useControls()
	const {colorMode, toggleColorMode} = useColorMode()
	const bg = useColorModeValue('white', 'uiBase.100')

	return (
		<Flex padding='20px 0' bg={bg} boxShadow='dark-lg'>
			<Container maxW='container.lg'>
				<Flex justifyContent='space-between' margin='0 auto'>
					<Text cursor='pointer' onClick={cleanRegion}>
						Where is the world?
					</Text>
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