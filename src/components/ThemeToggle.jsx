'use client';

import React, { useState, useEffect } from 'react';
import { RxMoon, RxSun } from 'react-icons/rx';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={`dark-mode-toggle animate-spin-in-75 duration-300 transform ${
				theme === 'dark' ? 'rotate-180' : 'rotate-0'
			}`}
		>
			{theme === 'dark' ? (
				<RxSun className='w-5 h-5 text-slate-300' />
			) : (
				<RxMoon className='w-5 h-5 text-slate-700' />
			)}
		</button>
	);
};

export default ThemeToggle;
