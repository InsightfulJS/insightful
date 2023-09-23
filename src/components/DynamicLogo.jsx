'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const DynamicLogo = () => {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Image
			src={`/logo-${theme ?? 'light'}.svg`}
			width='0'
			height='0'
			sizes='12vw'
			className='m-auto h-auto w-full lg:w-[70%]'
			alt='logo'
		/>
	);
};

export default DynamicLogo;
