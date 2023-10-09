import React from 'react';
import { BsFillChatRightQuoteFill } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className='w-full border-t border-slate-200 dark:border-slate-700 mt-8 py-8 flex flex-row justify-between items-center'>
			<p className='text-sm text-slate-500 dark:text-slate-400'>
				Copyright © 2023 | Insightful - Powered by Insightful
			</p>
			<BsFillChatRightQuoteFill className='w-6 h-6 text-slate-500 dark:text-slate-400' />
		</div>
	);
};

export default Footer;
