import Navigation from './Navigation';

const Sidebar = ({ content }) => {
	return (
		<>
			{/* Sidebar Border */}
			<div className='absolute inset-x-0 bottom-0 right-0 h-px bg-slate-200 dark:bg-slate-800 lg:left-auto lg:top-12 lg:bottom-12 lg:h-auto lg:w-px'></div>

			{/* Sidebar Content */}
			<div className='absolute w-full h-full flex flex-col justify-start items-center pt-4 pb-8 gap-12 overflow-y-auto'>
				{/* Main Navigation */}
				<Navigation content={content} />
			</div>
		</>
	);
};

export default Sidebar;
