#!/usr/bin/env node
import React from 'react';
import meow from 'meow';
import App from './app.js';
import {withFullScreen} from 'fullscreen-ink';

const cli = meow(
	`
	Usage
	  $ status_coder

	Options
		--statusCode  Your name

	Examples
	  $ status_coder --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			statusCode: {
				type: 'string',
			},
		},
	},
);

withFullScreen(<App statusCode={cli.flags.statusCode} />).start();
