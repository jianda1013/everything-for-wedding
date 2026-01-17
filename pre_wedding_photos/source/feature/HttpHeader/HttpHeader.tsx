import {Box, Text} from 'ink';
import React from 'react';

type Props = {
	statusCode: string | undefined;
};

const HeaderValue: Record<string, Record<string, string>> = {
	'200': {
		Date: 'Fri, 12 Nov 2021 19:33:01 GMT',
		Server: 'LoveInitializer/FirstConnection-1.0 (Powered by Destiny & Perfect Timing; Optimized for Heart-to-Heart Communication)',
		'Content-Type': 'application/new-love-established+first-moment-encoding',
		'Content-Length': 'The beginning of infinite possibilities and endless happiness',
		'Cache-Control': 'cache-this-moment-forever, first-love-never-expires, always-remember-this-day',
	},
	'202': {
		Date: 'Fri, 14 Mar 2026 10:00:00 GMT',
		Server: 'WeddingProcessor/Mr&Mrs-2026 (Powered by Wedding Vows & Eternal Promises; Blessed by Family & Friends; Certified by Love)',
		'Content-Type': 'application/holy-matrimony+till-death-do-us-part-encoding',
		'Content-Length': 'Unlimited terabytes of shared future, two lifetimes merging into one beautiful journey',
		'Cache-Control': 'processing-wedding-request, honeymoon-mode-scheduled, happily-ever-after-pending',
	},
	'302': {
		Date: 'Sun, 13 Oct 1996 00:02:99 GMT',
		Server: 'HeroFactory/Jianda-1996 (Future Nina\'s Knight; Coded by Destiny; Shipped with Love & Protection Protocols)',
		'Content-Type': 'application/future-boyfriend+knight-in-shining-algorithms',
		'Content-Length': '4kg of pure potential, infinite capacity for loving Nina',
		'Cache-Control': 'redirect-to-Nina\'s-heart, destiny-mode-enabled, hero-deployment-successful',
	},
	'403': {
		Date: 'Sun, 30 Jun 2024 12:00:00 GMT',
		Server: 'CatSecuritySystem/阿比-Firewall-2024 (Powered by Treats & Cuddles; Protected by Anti-Mischief Protocols)',
		'Content-Type': 'application/adorable-troublemaker+forbidden-cat-activities',
		'Content-Length': '1 extremely cute cow cat with unlimited naughty potential',
		'Cache-Control': 'forbidden-but-too-cute-to-stay-mad, treats-required-for-access, parental-controls-active',
	},
	'500': {
		Date: 'Date classified - too magnificent for standard formatting',
		Server: 'UniverseUpgrade/Nina-Edition (Powered by Pure Magic & Celestial Beauty; Warning: May cause reality to be insufficient)',
		'Content-Type': 'application/divine-magnificence+universe-breaking-beauty',
		'Content-Length': '∞ bytes of absolute perfection that crashed the previous universe version',
		'Cache-Control': 'beautiful-catastrophe, universe-requires-upgrade, all-previous-standards-obsolete',
	},
};

const HttpHeader = ({statusCode}: Props) => {
	return (
		<Box flexDirection="column" marginTop={1} marginBottom={1}>
			<Text color="gray">
				Date: <Text color="white">{HeaderValue[statusCode || '200']?.['Date']}</Text>
			</Text>
			<Text color="gray">
				Server: <Text color="white">{HeaderValue[statusCode || '200']?.['Server']}</Text>	
			</Text>
			<Text color="gray">
				Content-Type: <Text color="white">{HeaderValue[statusCode || '200']?.['Content-Type']}</Text>
			</Text>
			<Text color="gray">
				Content-Length: <Text color="white">{HeaderValue[statusCode || '200']?.['Content-Length']}</Text>
			</Text>
			<Text color="gray">
				Cache-Control: <Text color="white">{HeaderValue[statusCode || '200']?.['Cache-Control']}</Text>
			</Text>
		</Box>
	);
};

export default HttpHeader;
