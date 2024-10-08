import Prose from '@/components/Prose';
import OnThisPage from '@/components/OnThisPage';
import DocumentHero from '@/components/DocumentHero';
import Footer from '@/components/Footer';

const DocumentLayout = ({
	frontmatter,
	breadcrumb,
	documentContent,
	headings,
}) => {
	const { title, banner, tags } = { ...frontmatter };

	return (
		<div
			id='content'
			className='relative w-full h-full flex flex-row justify-between items-start px-8 py-6 gap-20 overflow-y-auto sm:pl-20 sm:pr-16'
		>
			<div className='mt-4 w-full min-h-full flex flex-col gap-4 justify-start items-start'>
				{breadcrumb}
				{banner && (
					<div className='w-full h-full hidden sm:flex'>
						<DocumentHero src={banner} />
					</div>
				)}
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
