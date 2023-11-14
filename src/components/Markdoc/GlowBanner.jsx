import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

const GlowBanner = ({ title, text, href }) => {
	const InnerContent = () => {
		return (
			<div className='rounded-full my-4 flex justify-center items-center p-0.5 bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-500 overflow-clip '>
				<div
					className={clsx(
						'rounded-full bg-sky-100/80 w-full h-full dark:bg-sky-800 px-4 p-1.5 flex flex-row justify-between items-center',
						href && 'hover:bg-sky-200/50 hover:dark:bg-sky-800/40'
					)}
				>
					<div className='flex flex-row gap-2 justify-start items-center'>
						<p className='m-0 font-medium text-sm text-sky-600 dark:text-sky-200'>
							{title}
						</p>
						<span className='w-1 h-1 rounded-full bg-sky-400 dark:bg-sky-200'></span>
						<p className='m-0 text-sm font-normal text-sky-600 dark:text-sky-200'>
							{text}
						</p>
					</div>
					{href && (
						<ChevronRight
							className='text-sky-600 dark:text-sky-300'
							size={18}
							strokeWidth={2}
						/>
					)}
				</div>
			</div>
		);
	};

	if (href) {
		return (
			<a href={href}>
				<InnerContent />
			</a>
		);
	} else {
		return <InnerContent />;
	}
};

const glowbanner = {
	render: 'GlowBanner',
	attributes: {
		title: {
			type: String,
		},
		text: {
			type: String,
		},
		href: {
			type: String,
		},
	},
};

export { GlowBanner, glowbanner };
