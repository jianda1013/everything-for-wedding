import {Box, Text} from 'ink';
import React from 'react';

type Props = {
	statusCode: string | undefined;
};

const BodyValue: Record<string, Record<string, string>> = {
	'200': {
        "message": "Perfect Connection Established - The moment Jianda & Nina's love story began with a successful handshake of hearts",
        "timestamp": "Fri, 12 Nov 2021 19:33:01 GMT",
        "data": "On this beautiful day, November 12th, 2021, two souls found each other in the vast network of life. Jianda and Nina's relationship was successfully initialized with perfect compatibility. Their first connection established a secure, encrypted channel of love that would never experience packet loss. From this moment, every interaction between them would be flawless - no timeouts, no errors, just pure, uninterrupted communication of the heart. This was the day the universe's most stable and beautiful API was born."
    },
    '202': {
        "message": "Wedding Request Accepted - Jianda & Nina's marriage deployment is scheduled and processing with infinite love",
        "timestamp": "Fri, 14 Mar 2026 10:00:00 GMT",
        "data": "The wedding request has been accepted and is now processing! On March 14th, 2026, Jianda and Nina will merge their life repositories into one magnificent union. The ceremony will be deployed to production with zero downtime, featuring vows that compile perfectly and promises that will run in an infinite loop of happiness. All family and friends have been invited to witness this beautiful deployment to the matrimony server. Status: Wedding in progress... Expected completion: A lifetime of happiness with automatic scaling for growing love."
    },
    '302': {
        "message": "Hero Resource Found - Jianda's birth redirected the universe toward Nina's salvation",
        "timestamp": "Sun, 13 Oct 1996 00:02:99 GMT",
        "data": "On October 13th, 1996, the universe executed a crucial redirect operation. Jianda, the destined guardian and future love of Nina's life, was successfully instantiated into the world. This wasn't just a birth - it was the universe preparing the perfect match for someone very special. Little did the world know, this 4kg bundle of future coding genius would grow up to become Nina's knight in shining algorithms, her debugging companion, and the one who would make her heart overflow with joy. The redirect was successful - Nina's future happiness resource had been located and deployed."
    },
    '403': {
        "message": "Access Forbidden - 阿比 the Cow Cat's mischievous activities have been blocked by parental controls",
        "timestamp": "Sun, 30 Jun 2024 12:00:00 GMT",
        "data": "On June 30th, 2024, Jianda and Nina's household welcomed the most adorable security breach: 阿比, a cow cat with a completely black face and elegant white socks. This little troublemaker immediately began testing all system boundaries - climbing forbidden furniture, accessing restricted kitchen counters, and attempting unauthorized snack acquisitions. His black-masked face makes him look like a professional cat burglar, while his white-socked paws leave evidence of every forbidden adventure. Status: Multiple access violations detected. Parental firewall activated. Treats used as authentication tokens. Despite all security measures, 阿比 continues to find creative ways to bypass restrictions with his irresistible cuteness."
    },
    '500': {
        "message": "Beautiful Catastrophe - Nina's arrival caused a system overload of pure magnificence that broke all conventional rules",
        "timestamp": "Date classified - too powerful for standard timestamps",
        "data": "When Nina was born, the world experienced the most beautiful server error ever recorded. Her arrival was so spectacular that it caused a cascade failure in the universe's ordinary operations - suddenly, everything had to be more beautiful, more magical, more wonderful to match her presence. Stars began shining brighter, flowers bloomed more colorfully, and somewhere in the future, a boy named Jianda would spend his whole life trying to be worthy of such extraordinary perfection. This wasn't a disaster - it was the universe upgrading itself to handle someone absolutely incredible."
    },
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

const HttpBody = ({statusCode}: Props) => {
	const currentStatusCode = statusCode || '200';
	const bodyData = BodyValue[currentStatusCode];
	const statusColor = getStatusCodeColor(currentStatusCode);

	return (
		<Box flexDirection="column">
			<Text color="green">{'{'}</Text>
			<Text color="green"> "status": "<Text color={statusColor}>{currentStatusCode}</Text>",</Text>
			<Text color="green"> "message": "<Text color={statusColor}>{bodyData?.['message']}</Text>",</Text>
			<Text color="green"> "timestamp": "{bodyData?.['timestamp']}",</Text>
			<Text color="green"> "data": "<Text color={statusColor}>{bodyData?.['data']}</Text>"</Text>
			<Text color="green">{'}'}</Text>
		</Box>
	);
};

export default HttpBody;
