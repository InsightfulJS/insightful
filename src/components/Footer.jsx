import React from 'react';
import config from '@/config/config';

const Footer = () => {
	const { footerText = 'Copyright © 2023' } = { ...config };
	return (
		<div className='w-full border-t border-slate-200 dark:border-slate-700 mt-8 py-4 flex flex-col justify-between items-start sm:flex-row sm:items-center sm:py-8'>
			<p className='text-sm text-slate-500 dark:text-slate-400'>
				{footerText}
			</p>
			<span className='sm:ml-3 text-slate-500 text-xs'>
				Powered by Insightful
			</span>
		</div>
	);
};

export default Footer;
