'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const SidebarOverlay = () => {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	if (theme === 'dark') {
		return (
			<svg
				width='384'
				height='982'
				viewBox='0 0 384 982'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='w-full h-full'
			>
				<path d='M0 0H384V982H0V0Z' fill='url(#paint0_radial_2_8)' />
				<defs>
					<radialGradient
						id='paint0_radial_2_8'
						cx='0'
						cy='0'
						r='1'
						gradientUnits='userSpaceOnUse'
						gradientTransform='translate(484 491) rotate(-180) scale(384 491)'
					>
						<stop stopColor='#006299' stopOpacity='0.53' />
						<stop
							offset='0.359375'
							stopColor='#0066C4'
							stopOpacity='0.23'
						/>
						<stop offset='1' stopOpacity='0' />
					</radialGradient>
				</defs>
			</svg>
		);
	} else {
		return (
			<svg
				width='384'
				height='982'
				viewBox='0 0 384 982'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='w-full h-full'
			>
				<path d='M0 0H384V982H0V0Z' fill='url(#paint0_radial_2_4)' />
				<defs>
					<radialGradient
						id='paint0_radial_2_4'
						cx='0'
						cy='0'
						r='1'
						gradientUnits='userSpaceOnUse'
						gradientTransform='translate(484 491) rotate(-180) scale(384 491)'
					>
						<stop stopColor='#3783F5' stopOpacity='0.23' />
						<stop
							offset='0.359375'
							stopColor='#368BEF'
							stopOpacity='0.13'
						/>
						<stop offset='1' stopColor='#DEDEDE' stopOpacity='0' />
					</radialGradient>
				</defs>
			</svg>
		);
	}
};

export default SidebarOverlay;
