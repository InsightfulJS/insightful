import Prose from '@/components/Prose';
import OnThisPage from '@/components/OnThisPage';
import Footer from '@/components/Footer';

const DocumentLayout = ({ breadcrumb, title, documentContent, headings }) => {
	return (
		<div
			id='content'
			className='relative w-full h-full flex flex-row justify-between items-start pl-24 pr-16 py-6 gap-20 overflow-y-auto'
		>
			<div className='w-full min-h-full flex flex-col gap-4 justify-start items-start'>
				{breadcrumb}
				<h1 className='text-3xl font-semibold text-sky-700 dark:text-sky-500'>
					{title}
				</h1>
				<Prose className='flex-grow w-full'>{documentContent}</Prose>
				<Footer />
			</div>
			<div className='hidden xl:sticky xl:top-[0.5rem] xl:flex xl:flex-row xl:justify-start xl:items-start'>
				<OnThisPage headings={headings} />
			</div>
		</div>
	);
};

export default DocumentLayout;
