'use client';
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoCloseOutline } from 'react-icons/io5';

import ThemeToggle from './ThemeToggle';
import config from '@/config/config';

import Navigation from './Navigation';

const MobileNavigation = ({ content, isOpen, setIsOpen, RepoIcon }) => {
	const pathname = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<Dialog
			open={isOpen}
			onClose={setIsOpen}
			className='fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden'
			aria-label='Navigation'
		>
			<Dialog.Panel className='min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6'>
				<div className='flex items-center'>
					<button
						type='button'
						onClick={() => setIsOpen(false)}
						aria-label='Close navigation'
					>
						<IoCloseOutline className='h-7 w-7 text-slate-700 dark:text-slate-300' />
					</button>
					<div className='flex flex-row gap-6 justify-end items-center flex-grow basis-0'>
						<ThemeToggle />
						<a target='_blank' href={config?.repoLink ?? ''}>
							<RepoIcon className='text-slate-700 dark:text-slate-300 w-6 h-6' />
						</a>
					</div>
				</div>

				<Navigation content={content} />
			</Dialog.Panel>
		</Dialog>
	);
};

export default MobileNavigation;
