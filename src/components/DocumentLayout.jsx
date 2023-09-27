import Prose from '@/components/Prose';
import OnThisPage from '@/components/OnThisPage';

const DocumentLayout = ({ breadcrumb, title, documentContent, headings }) => {
	return (
		<div className='relative w-full h-full flex flex-row justify-between items-start pl-24 pr-16 py-6 gap-20 overflow-y-auto'>
			<div className='w-full flex flex-col gap-4 justify-start items-start'>
				{breadcrumb}
				<h1 className='text-3xl font-semibold text-sky-700 dark:text-sky-500'>
					{title}
				</h1>
				<Prose className='flex-grow'>{documentContent}</Prose>
			</div>
			<div className='hidden xl:sticky xl:top-[0.5rem] xl:flex xl:flex-row xl:justify-start xl:items-start'>
				<OnThisPage headings={headings} />
			</div>
		</div>
	);
};

export default DocumentLayout;
