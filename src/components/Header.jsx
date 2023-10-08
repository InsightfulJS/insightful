import React from 'react';
import { BiSearchAlt, BiLogoGithub } from 'react-icons/bi';

import DynamicLogo from './DynamicLogo';
import ThemeToggle from './ThemeToggle';

const Header = () => {
	return (
		<div className='w-full h-14 flex flex-row px-4 py-2 gap-4 justify-between items-center bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800'>
			{/* Logo */}
			<DynamicLogo />

			{/* Search Bar Button */}
			<button
				type='button'
				className='w-[30%] flex h-8 items-center gap-2 rounded-md bg-slate-100 dark:bg-slate-900 pl-2 pr-3 text-sm text-zinc-700 dark:text-zinc-500 ring-1 ring-slate-200 dark:ring-slate-700 first-letter:dark:ring-zinc-900/10 transition hover:ring-zinc-900/20 ui-not-focus-visible:outline-none '
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

			{/* Control Buttons */}
			<div className='flex flex-row gap-6 justify-end items-center flex-grow basis-0'>
				<ThemeToggle />
				<BiLogoGithub className='text-slate-700 dark:text-slate-300 w-6 h-6' />
			</div>
		</div>
	);
};

export default Header;
