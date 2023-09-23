import React from 'react';

const SidebarOverlay = () => {
	return (
		<svg
			width='384'
			height='982'
			viewBox='0 0 384 982'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='w-full h-full'
		>
			<path d='M0 0H384V982H0V0Z' fill='url(#paint0_radial_1_7)' />
			<defs>
				<radialGradient
					id='paint0_radial_1_7'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(484 491) rotate(-180) scale(384 491)'
				>
					<stop stopColor='#30548E' />
					<stop offset='1' stopColor='#0C131F' stopOpacity='0' />
				</radialGradient>
			</defs>
		</svg>
	);
};

export default SidebarOverlay;
