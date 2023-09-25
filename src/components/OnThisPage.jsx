import React from 'react';
import Link from 'next/link';

const OnThisPage = ({ headings = [] }) => {
	return (
		<nav className='w-56 flex flex-col justify-start items-start gap-4'>
			<h2 className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
				On this page
			</h2>
			<div className='flex flex-col text-sm font-normal text-slate-700 dark:text-slate-300'>
				{headings.map(({ title, id, children }) => {
					return (
						<ol key={id} className='mt-2 space-y-3'>
							<li>
								<Link href={`#${id}`}>{title}</Link>
								{children.length > 0 && (
									<ol className='mt-2 space-y-3 pl-5'>
										{children.map(({ id, title }) => {
											return (
												<li key={id}>
													<Link href={`#${id}`}>
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
		</nav>
	);
};

export default OnThisPage;
