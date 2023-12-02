import React from 'react';
import config from '@/config/config';

import SidebarLinks from './SidebarLinks';
import SidebarExternalLink from './SidebarExternalLink';

const hasExtLinks = Object(config).hasOwnProperty('sidebarExternalLinks');

const Navigation = ({ content }) => {
	return (
		<nav className='mt-6 px-2'>
			{/* Configured External Links */}
			<div className='mb-8 flex flex-col gap-4 justify-start items-center w-full'>
				{hasExtLinks &&
					config.sidebarExternalLinks.map(({ url, label, icon }) => {
						return (
							<SidebarExternalLink
								key={label}
								href={url}
								label={label}
								icon={icon}
							/>
						);
					})}
			</div>

			{/* Sidebar Page Naviagtion */}
			<SidebarLinks content={content} />
		</nav>
	);
};

export default Navigation;
