import Link from 'next/link';
import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const Icon = ({ label, icon, href }) => {
	const LucideIcon = dynamic(dynamicIconImports[icon]);

	return (
		<Link
			className='flex flex-row gap-3 items-center justify-start w-full'
			href={href}
		>
			<div className='border border-slate-300/80 dark:border-none w-6 h-6 rounded-md flex justify-center items-center dark:bg-gradient-to-r dark:from-sky-600 dark:to-cyan-500'>
				<LucideIcon
					className='text-sky-500 dark:text-white'
					size={12}
					strokeWidth={3}
				/>
			</div>
			<p className='text-sm text-slate-700 dark:text-slate-100'>
				{label}
			</p>
		</Link>
	);
};

export default Icon;
