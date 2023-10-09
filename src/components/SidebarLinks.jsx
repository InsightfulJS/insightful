'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const SidebarLinks = ({ content }) => {
	const pathname = usePathname();

	const SectionHeading = ({ heading }) => {
		return (
			<h2 className='text-sm font-medium text-slate-900 dark:text-slate-100'>
				{heading}
			</h2>
		);
	};

	const PageListItem = ({ path, name }) => {
		return (
			<li className='relative'>
				<Link
					className={clsx(
						'text-sm block w-full pl-3 -ml-px',
						pathname == path &&
							'border-l border-sky-600 text-sky-700 dark:text-sky-500 dark:border-sky-500',
						pathname != path &&
							'text-slate-500 dark:text-slate-400 hover:border-slate-400 hover:border-l'
					)}
					href={path}
				>
					{name}
				</Link>
			</li>
		);
	};

	return (
		<div className='m-auto w-full flex flex-col justify-between items-start gap-8'>
			{content.map(({ sectionNameTitleCase = '', pages = [] }) => {
				return (
					<div key={sectionNameTitleCase} className='w-full'>
						{/* Primary Sections */}
						<SectionHeading heading={sectionNameTitleCase} />
						<ul
							role='list'
							className='mt-2 space-y-2 lg:mt-4 lg:space-y-4 border-l border-slate-200 dark:border-slate-700'
						>
							{pages.map(({ name = '', path = '' }) => (
								<PageListItem
									key={name}
									name={name}
									path={path}
								/>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default SidebarLinks;
