import React from 'react';
import { HiHome } from 'react-icons/hi';
import { BiChevronRight } from 'react-icons/bi';

import { pathToTitleCase } from '@/utils/pathToTitleCase';
import { removeNumberedPrefix } from '@/utils/removeNumberedPrefix';

const Breadcrumb = ({ slugArray = [] }) => {
	return (
		<nav className='w-full text-xs font-normal text-slate-500 dark:text-slate-300'>
			<div className='w-full flex flex-row gap-2 justify-start items-center'>
				{slugArray.map((section, idx) => {
					const sectionName = pathToTitleCase(
						removeNumberedPrefix(section)
					).replace('.md', '');

					let sectionCls = idx == slugArray.length - 1 ? 'py-1' : '';
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
