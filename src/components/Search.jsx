'use client';

import 'superkey/styles.css';

import { useState, useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Command, CommandInput, CommandList, CommandOption } from 'superkey';

const SearchPallete = ({ open, setOpen }) => {
	const [query, setQuery] = useState('');

	useEffect(() => {
		const down = (e) => {
			if (e.key === 'k' && e.metaKey) {
				setOpen((open) => !open);
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

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

const Search = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className='w-full h-full flex sm:items-center'>
			<button
				type='button'
				className='w-full flex h-8 items-center gap-2 rounded-md bg-slate-100 dark:bg-slate-900 pl-2 pr-3 text-sm text-zinc-700 dark:text-zinc-500 ring-1 ring-slate-200 dark:ring-slate-700 first-letter:dark:ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:hover:ring-zinc-500/20 ui-not-focus-visible:outline-none '
				onClick={() => setOpen(!open)}
			>
				<BiSearchAlt className='text-slate-400 dark:text-slate-500 w-4 h-4' />
				<p className='text-slate-400 dark:text-slate-500 text-sm font-normal'>
					Find something...
				</p>
				<kbd className='ml-auto text-2xs text-slate-400 dark:text-slate-500'>
					<kbd className='font-sans'>⌘</kbd>
					<kbd className='font-sans'>K</kbd>
				</kbd>
			</button>
			<SearchPallete open={open} setOpen={setOpen} />
		</div>
	);
};

export default Search;
