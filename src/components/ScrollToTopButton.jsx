'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [frame, setFrame] = useState(null);

	useEffect(() => {
		const contentWindow = document.getElementById('content');
		setFrame(contentWindow);

		const toggleVisibility = () => {
			contentWindow.scrollTop > 100
				? setIsVisible(true)
				: setIsVisible(false);
		};

		contentWindow.addEventListener('scroll', toggleVisibility);
		return () => {
			contentWindow.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		isVisible &&
			frame.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
	};

	return (
		<div className='mt-8 flex flex-col gap-4 w-full'>
			<span
				className={clsx(
					'w-[70%] h-px bg-slate-200 dark:bg-slate-700 transition-opacity duration-200',
					isVisible ? 'opacity-100' : 'opacity-0'
				)}
			></span>
			<button
				className={clsx(
					'flex flex-row gap-2 items-center text-sm text-slate-500 dark:text-slate-400 outline-none transition-opacity duration-200',
					isVisible ? 'opacity-100' : 'opacity-0'
				)}
				onClick={scrollToTop}
			>
				<BsArrowUpCircle className='w-4 h-4 text-slate-500 dark:text-slate-400' />
				Scroll To Top
			</button>
		</div>
	);
};

export default ScrollToTopButton;
