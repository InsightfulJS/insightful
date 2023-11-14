'use client';

import React from 'react';

import clsx from 'clsx';
export const TabContext = React.createContext();

const Tabs = ({ labels, children }) => {
	const [currentTab, setCurrentTab] = React.useState(labels[0]);

	return (
		<TabContext.Provider value={currentTab}>
			<div className='my-3 px-5 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800'>
				<ul
					role='list'
					className='m-0 p-0 flex flex-row gap-4 list-none '
				>
					{labels.map((label) => (
						<li
							key={label}
							className={clsx(
								'p-0',
								label === currentTab
									? 'border-b-2 border-sky-500'
									: ''
							)}
						>
							<button
								role='tab'
								aria-selected={label === currentTab}
								onClick={() => setCurrentTab(label)}
								className={clsx(
									'font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 focus:outline-none'
								)}
							>
								{label}
							</button>
						</li>
					))}
				</ul>
				{children}
			</div>
		</TabContext.Provider>
	);
};

export default Tabs;
