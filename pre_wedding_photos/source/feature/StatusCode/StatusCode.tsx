import {Box, render, Text} from 'ink';
import React from 'react';
// import Ascii from 'ink-ascii';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import StatusSpot from './StatusSpot.js';

type Props = {
	statusCodeStr: string | undefined;
};

const getStatusCodeColor = (statusCodeStr: string) => {
	try {
		const statusCode = Number(statusCodeStr);
		if (statusCode >= 200 && statusCode < 300) return 'green';
		if (statusCode >= 300 && statusCode < 400) return 'yellow';
		return 'red';
	} catch (error) {
		return 'red';
	}
};

const StatusCode = ({statusCodeStr = '200'}: Props) => {
	const color = getStatusCodeColor(statusCodeStr);
	return (
		<Box display="flex" flexDirection="row" alignItems="center" gap={2}>
			<StatusSpot color={color} />
			<BigText text={String(statusCodeStr)} colors={[color]} />
		</Box>
	);
};

export default StatusCode;
