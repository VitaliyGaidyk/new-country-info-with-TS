import * as React from "react";
import {Grid, GridProps} from "@chakra-ui/react";

const List: React.FC<GridProps> = (props) => {
	const {children} = props

	return (
		<Grid py={2}
		      templateColumns={'repeat(4, 1fr)'}
		      gap='3rem'
		>
			{children}
		</Grid>
	);
};

export default List;