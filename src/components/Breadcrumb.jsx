import React from 'react';
import { HiHome } from 'react-icons/hi';
import { BiChevronRight } from 'react-icons/bi';

import { pathToTitleCase } from '@/utils/pathToTitleCase';
import { removeNumberedPrefix } from '@/utils/removeNumberedPrefix';

const Breadcrumb = ({ slugArray = [] }) => {
	return (
		<nav className='w-full text-xs font-normal text-slate-500 dark:text-slate-300'>
			<div className='w-full flex flex-row gap-2 justify-start items-center'>
				<a href='/'>
					<HiHome className='w-4 h-4' />
				</a>
				<BiChevronRight className='w-4 h-4' />
				{slugArray.map((section, idx) => {
					const sectionName = pathToTitleCase(
						removeNumberedPrefix(section)
					).replace('.md', '');

					let sectionCls =
						idx == slugArray.length - 1
							? 'bg-slate-300 bg-opacity-40 rounded-full py-1 px-2 dark:bg-slate-800'
							: '';
					return (
						<React.Fragment key={idx}>
							<p className={sectionCls}>{sectionName}</p>
							{idx < slugArray.length - 1 && (
								<BiChevronRight className='w-4 h-4' />
							)}
						</React.Fragment>
					);
				})}
			</div>
		</nav>
	);
};

export default Breadcrumb;
