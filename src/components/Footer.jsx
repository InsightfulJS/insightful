import React from 'react';
import { BsFillChatRightQuoteFill } from 'react-icons/bs';
import config from '@/config/config';

const Footer = () => {
	const { footerText = 'Copyright © 2023' } = { ...config };
	return (
		<div className='w-full border-t border-slate-200 dark:border-slate-700 mt-8 py-8 flex flex-row justify-between items-center'>
			<p className='text-sm text-slate-500 dark:text-slate-400'>
				{footerText}
			</p>
			<span className='ml-3 text-slate-500 text-xs'>
				Powered by Insightful
			</span>
		</div>
	);
};

export default Footer;
