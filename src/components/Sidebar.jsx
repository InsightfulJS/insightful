import path from 'path';

import DynamicLogo from './DynamicLogo';
import SidebarOverlay from './SidebarOverlay';
import SidebarLinks from './SidebarLinks';
import { generateSidebarContent } from '@/utils/generateSidebarContent';

const Sidebar = () => {
	// TODO: When docs is not present, show empty page content
	const docsDir = path.join(process.cwd(), 'docs');
	const content = generateSidebarContent(docsDir);

	return (
		<div className='relative w-[20%] h-full bg-slate-100 dark:bg-slate-900 flex flex-col'>
			{/* Overlay Glow Effect */}
			<SidebarOverlay />
			{/* Glowing Sidebar Border */}
			<div className='absolute inset-x-0 bottom-0 right-0 h-px bg-slate-100 mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px'></div>

			{/* Sidebar Content */}
			<div className='absolute w-full h-full flex flex-col justify-start items-start pt-4 pb-8 px-4 gap-12'>
				{/* Logo */}
				<a
					href='/'
					className='flex flex-row gap-2 justify-center items-center'
				>
					<DynamicLogo />
				</a>

				{/* Main Navigation */}
				<nav className='px-4 '>
					<SidebarLinks content={content} />
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
