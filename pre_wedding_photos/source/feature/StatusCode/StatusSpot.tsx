import {Box, Text} from 'ink';
import React, {useEffect, useState} from 'react';

type Props = {
	color: string;
};

const SQUARE_CHAR = '█';
const SQUARE_REPEAT_TIMES = 4;
const SQUARE_SHADOW_CHAR = '═';

function StatusSpot({color}: Props) {
	const statusSpot = SQUARE_CHAR.repeat(SQUARE_REPEAT_TIMES);
	const statusSpotShadow =
		'╚' + SQUARE_SHADOW_CHAR.repeat(SQUARE_REPEAT_TIMES - 1) + '╝';

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Box>
				<Text color={color}>{statusSpot}</Text>
				<Text color={'white'}>{'╗'}</Text>
			</Box>
			<Text color={'white'}>{statusSpotShadow}</Text>
		</Box>
	);
}

export default StatusSpot;
