import React from 'react';
import { HiHome } from 'react-icons/hi';

const Breadcrumb = ({ slugArray = [] }) => {
	return (
		<nav className='w-full text-xs font-normal text-slate-500 dark:text-slate-300'>
			<div className='w-full flex flex-row gap-2 justify-start items-center'>
				<a href='/'>
					<HiHome className='w-4 h-4' />
				</a>
				<span className=''>/</span>
				{slugArray.map((section, idx) => {
					return (
						<React.Fragment key={idx}>
							<p>{section.replace('.md', '')}</p>
							{idx < slugArray.length - 1 && (
								<span className=''>/</span>
							)}
						</React.Fragment>
					);
				})}
			</div>
		</nav>
	);
};

export default Breadcrumb;
