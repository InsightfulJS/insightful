'use client';

import Link from 'next/link';
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
		<Link
			href='/'
			className='relative h-full m-auto flex flex-row gap-2 flex-grow basis-0 justify-start items-center pl-4'
		>
			<Image
				src={`/logo-${theme ?? 'light'}.svg`}
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: 'auto', height: '100%' }} // optional
				alt='Website logo'
			/>
		</Link>
	);
};

export default DynamicLogo;
