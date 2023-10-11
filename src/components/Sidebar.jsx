import path from 'path';
import config from '@/config/config';

import SidebarLinks from './SidebarLinks';
import SidebarExternalLink from './SidebarExternalLink';
import { generateSidebarContent } from '@/utils/generateSidebarContent';

const Sidebar = () => {
	const docsDir = path.join(process.cwd(), 'docs');
	const content = generateSidebarContent(docsDir);
	const hasExtLinks = Object(config).hasOwnProperty('sidebarExternalLinks');

	return (
		<div className='relative w-[24%] h-full flex flex-col'>
			{/* Sidebar Border */}
			<div className='absolute inset-x-0 bottom-0 right-0 h-px bg-slate-200 dark:bg-slate-800 lg:left-auto lg:top-12 lg:bottom-12 lg:h-auto lg:w-px'></div>

			{/* Sidebar Content */}
			<div className='absolute w-full h-full flex flex-col justify-start items-center pt-4 pb-8 gap-12 overflow-y-auto'>
				{/* Main Navigation */}
				<nav className='mt-6 px-2'>
					{/* Configured External Links */}
					<div className='mb-8 flex flex-col gap-4 justify-start items-center w-full'>
						{hasExtLinks &&
							config.sidebarExternalLinks.map(
								({ url, label, icon }) => {
									return (
										<SidebarExternalLink
											key={label}
											href={url}
											label={label}
											icon={icon}
										/>
									);
								}
							)}
					</div>

					{/* Sidebar Page Naviagtion */}
					<SidebarLinks content={content} />
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
