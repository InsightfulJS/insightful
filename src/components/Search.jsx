'use client';

import 'superkey/styles.css';

import { useState } from 'react';
import { Command, CommandInput, CommandList, CommandOption } from 'superkey';

const Search = () => {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');

	const myData = [
		{
			id: 1,
			name: 'Getting Started',
			action: () => alert('Hello World!'),
		},
	];

	return (
		<Command
			open={open}
			onClose={() => setOpen(false)}
			afterLeave={() => {
				setQuery('');
			}}
			commandFunction={() => {
				setOpen(false);
			}}
		>
			<CommandInput
				onChange={(e) => {
					console.log(e.target.value);
				}}
			/>
			<CommandList>
				{myData.map((example) => (
					<CommandOption
						key={example.id}
						value={example.action}
						activeClassName='bg-gray-100 dark:bg-zinc-700/25'
					>
						<p>{example.name}</p>
					</CommandOption>
				))}
			</CommandList>
		</Command>
	);
};

export default Search;
