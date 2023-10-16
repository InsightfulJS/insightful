import Link from 'next/link';
import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const FancyLink = ({ title = '', link, icon }) => {
	const LucideIcon = dynamic(dynamicIconImports[icon]);
	const ChevronIcon = dynamic(dynamicIconImports['chevron-right']);
	return (
		<Link
			href={link}
			className='my-3 flex flex-row px-6 py-1 justify-between items-center bg-transparent border border-slate-300 dark:border-slate-600 rounded-md hover:border-2'
		>
			<div className='flex flex-row gap-5 justify-start items-center'>
				<LucideIcon
					className='text-slate-700 dark:text-slate-400'
					size={24}
					strokeWidth={2}
				/>
				<p className='text-base text-slate-800 dark:text-slate-200'>
					{title}
				</p>
			</div>
			<ChevronIcon
				className='text-slate-700 dark:text-slate-400'
				size={18}
				strokeWidth={3}
			/>
		</Link>
	);
};

export default FancyLink;
