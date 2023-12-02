'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { BiLogoGithub } from 'react-icons/bi';
import { AiFillGitlab } from 'react-icons/ai';
import { IoLogoBitbucket } from 'react-icons/io';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';

import config from '@/config/config';

import Search from './Search';
import ThemeToggle from './ThemeToggle';
import MobileNavigation from './MobileNavigation';

const icons = {
	bitbucket: IoLogoBitbucket,
	gitlab: AiFillGitlab,
	github: BiLogoGithub,
};

const Header = () => {
	const {
		repoIcon = 'github',
		logoIcon,
		title,
		logoHeightOverride,
	} = { ...config };
	const [isOpen, setIsOpen] = useState(false);
	const Icon = repoIcon in icons ? icons[repoIcon] : icons['github'];

	return (
		<div className='w-full h-14 flex flex-row px-4 py-2 gap-4 justify-between items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800'>
			<button className='block sm:hidden' onClick={() => setIsOpen(true)}>
				<HiOutlineMenuAlt1 className='w-7 h-7 text-slate-700 dark:text-slate-300' />
			</button>
			<MobileNavigation
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				RepoIcon={Icon}
			/>

			<Link
				className='w-full flex justify-center items-center gap-3 flex-grow basis-0 pl-4 sm:justify-start'
				href={'/'}
			>
				<Image
					src={`/${logoIcon}`}
					loading='eager'
					width={0}
					height={0}
					sizes='100vw'
					style={{
						width: 'auto',
						height: logoHeightOverride ?? '25px',
					}}
					alt='Website logo icon'
				/>
				<p className='hidden text-slate-600 tracking-wider font-semibold text-xl dark:text-slate-100 sm:block'>
					{title}
				</p>
			</Link>

			{/* Search Bar  */}
			<div className='w-1/3 h-full hidden sm:block'>
				<Search />
			</div>

			{/* Control Buttons */}
			<button className='flex-row gap-6 justify-end flex sm:!hidden'>
				<IoSearch className='w-6 h-6 text-slate-700 dark:text-slate-300' />
			</button>
			<div className='flex-row gap-6 justify-end items-center flex-grow basis-0 hidden sm:flex'>
				<ThemeToggle />
				<a target='_blank' href={config?.repoLink ?? ''}>
					<Icon className='text-slate-700 dark:text-slate-300 w-6 h-6' />
				</a>
			</div>
		</div>
	);
};

export default Header;
