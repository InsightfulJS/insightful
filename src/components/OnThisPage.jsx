'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import ScrollToTopButton from './ScrollToTopButton';

const OnThisPage = ({ headings = [] }) => {
	const [activeHeading, setActiveHeading] = useState(null);

	useEffect(() => {
		const contentWindow = document.getElementById('content');
		const headings = contentWindow.querySelectorAll('h2, h3, h4');

		const handleScroll = () => {
			let currentlyInView = null;

			for (const heading of headings) {
				const rect = heading.getBoundingClientRect();
				if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
					currentlyInView = heading;
					console.log(heading);
					break;
				}
			}

			setActiveHeading(currentlyInView?.id);
		};

		handleScroll(); // on load before scrolling has occured
		contentWindow.addEventListener('scroll', handleScroll);

		return () => {
			contentWindow.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className='w-56 flex flex-col justify-start items-start gap-4'>
			<h2 className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
				On this page
			</h2>
			<div className='flex flex-col text-sm font-base text-slate-700 dark:text-slate-300'>
				{headings.map(({ title, id, children }) => {
					return (
						<ol key={id} className='mt-2 space-y-3'>
							<li>
								<Link
									href={`#${id}`}
									className={clsx(
										activeHeading == id &&
											'text-sky-700 dark:text-sky-600'
									)}
								>
									{title}
								</Link>
								{children.length > 0 && (
									<ol className='mt-2 space-y-3 pl-5'>
										{children.map(({ id, title }) => {
											return (
												<li key={id}>
													<Link
														href={`#${id}`}
														className={clsx(
															activeHeading ==
																id &&
																'text-sky-700 dark:text-sky-600'
														)}
													>
														{title}
													</Link>
												</li>
											);
										})}
									</ol>
								)}
							</li>
						</ol>
					);
				})}
			</div>

			<ScrollToTopButton />
		</nav>
	);
};

export default OnThisPage;
