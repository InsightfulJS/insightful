'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

const Banner = ({ title, text, href }) => {
	const InnerContent = () => {
		return (
			<div
				className={clsx(
					'rounded-full bg-sky-200/30 dark:bg-sky-800/30 px-4 p-1.5 my-4 flex flex-row justify-between items-center',
					href && 'hover:bg-sky-200/50 hover:dark:bg-sky-800/40'
				)}
			>
				<div className='flex flex-row gap-2 justify-start items-center'>
					<p className='m-0 font-medium text-sm text-sky-600 '>
						{title}
					</p>
					<span className='w-1 h-1 rounded-full bg-sky-400 dark:bg-sky-700'></span>
					<p className='m-0 text-sm font-normal text-sky-600 '>
						{text}
					</p>
				</div>
				{href && (
					<ChevronRight
						className='text-sky-600 dark:text-sky-800'
						size={18}
						strokeWidth={2}
					/>
				)}
			</div>
		);
	};

	if (href) {
		return (
			<Link href={href}>
				<InnerContent />
			</Link>
		);
	} else {
		return <InnerContent />;
	}
};

export default Banner;
