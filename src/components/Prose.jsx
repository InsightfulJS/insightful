import clsx from 'clsx';

const Prose = ({ as: Component = 'div', className, ...props }) => {
	return (
		<Component
			className={clsx(
				className,
				'prose prose-slate max-w-none dark:prose-invert dark:text-slate-400',
				// headings
				'prose-headings:mt-3 prose-headings:scroll-mt-12 prose-headings:font-normal lg:prose-headings:scroll-mt-[3rem] prose-h2:text-lg prose-h2:font-semibold prose-h3:font-semibold prose-h3:text-base prose-h4:text-base',
				// links
				'prose-a:font-semibold prose-a:no-underline prose-a:text-sky-600 dark:prose-a:text-sky-400',
				// pre
				'prose-pre:rounded-xl prose-pre:bg-slate-950 dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10'
			)}
			{...props}
		/>
	);
};

export default Prose;
