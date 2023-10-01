'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SidebarLinks = ({ content }) => {
	console.log(JSON.stringify(content, null, 2));

	const [activePage, setActivePage] = useState(
		content[0]?.pages[0]?.path ?? '/'
	);

	const isActive = (path) => {
		return path != activePage && 'before:hidden';
	};

	return (
		<div className='flex flex-col justify-between items-start gap-4'>
			{content.map(({ sectionNameTitleCase = '', pages = [] }) => {
				return (
					<ul
						key={sectionNameTitleCase}
						role='list'
						className='space-y-9'
					>
						<li>
							<h2 className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
								{sectionNameTitleCase}
							</h2>
							<ul
								role='list'
								className='mt-2 space-y-2 border-l-2 lg:mt-4 lg:space-y-4 border-slate-300 dark:border-slate-700'
							>
								{pages.map(({ name = '', path = '' }) => {
									return (
										<li key={path} className='relative'>
											<Link
												className={`text-sm block w-full pl-3.5 ${isActive(
													path
												)} before:pointer-events-none before:absolute before:-left-0.5 before:top-1/2 before:h-5 before:w-0.5 before:-translate-y-1/2 before:rounded-full font-medium text-slate-500 dark:text-slate-400 before:bg-sky-500`}
												href={path}
												onClick={() =>
													setActivePage(path)
												}
											>
												{name}
											</Link>
										</li>
									);
								})}
							</ul>
						</li>
					</ul>
				);
			})}
		</div>
	);
};

export default SidebarLinks;
