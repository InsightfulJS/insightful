'use client';

import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='dark-mode-toggle'
		>
			{theme === 'dark' ? (
				<FaSun className='w-5 h-5 text-slate-300' />
			) : (
				<FaMoon className='w-5 h-5 text-slate-700' />
			)}
		</button>
	);
};

export default ThemeToggle;
