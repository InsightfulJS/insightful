import path from 'path';

import SidebarLinks from './SidebarLinks';
import { generateSidebarContent } from '@/utils/generateSidebarContent';

const Sidebar = () => {
	const docsDir = path.join(process.cwd(), 'docs');
	const content = generateSidebarContent(docsDir);

	return (
		<div className='relative w-[26%] h-full flex flex-col'>
			{/* Sidebar Border */}
			<div className='absolute inset-x-0 bottom-0 right-0 h-px bg-slate-200 dark:bg-slate-800 lg:left-auto lg:top-12 lg:bottom-12 lg:h-auto lg:w-px'></div>

			{/* Sidebar Content */}
			<div className='absolute w-full h-full flex flex-col justify-start items-center pt-4 pb-8 px-4 gap-12'>
				{/* Main Navigation */}
				<nav className='mt-6 px-4 '>
					<SidebarLinks content={content} />
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
