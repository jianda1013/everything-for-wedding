import React, {useEffect} from 'react';
import {Box, Text} from 'ink';
import StatusCode from './feature/StatusCode/StatusCode.js';
import HttpHeader from './feature/HttpHeader/HttpHeader.js';
import HttpBody from './feature/HttpBody/HttpBody.js';

type Props = {
	statusCode: string | undefined;
};

export default function App({statusCode}: Props) {
	return (
		<Box
			width={'100%'}
			height={'100%'}
			borderStyle="classic"
			flexDirection="column"
			paddingX={1}
		>
			{/* HTTP Status Line */}
			<Box flexDirection="row" gap={1}>
				<Text color="cyan">HTTP/1.1</Text>
				<StatusCode statusCodeStr={statusCode} />
			</Box>

			{/* Headers */}
			<HttpHeader statusCode={statusCode} />

			{/* Empty line separator */}
			<Text> </Text>

			{/* Response Body */}
			<HttpBody statusCode={statusCode} />
		</Box>
	);
}
