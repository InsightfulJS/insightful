'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
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
		<div
			className={clsx(
				'w-full mt-8 pt-4 border-slate-200 dark:border-slate-700',
				isVisible ? 'border-t' : 'border-none'
			)}
		>
			<button
				className={clsx(
					' flex flex-row gap-2 items-center text-sm text-slate-400 dark:text-slate-600 outline-none transition-opacity duration-200',
					isVisible ? 'opacity-100' : 'opacity-0'
				)}
				onClick={scrollToTop}
			>
				<BsArrowUpCircle className='w-4 h-4 text-slate-400 dark:text-slate-600' />
				Scroll To Top
			</button>
		</div>
	);
};

export default ScrollToTopButton;
