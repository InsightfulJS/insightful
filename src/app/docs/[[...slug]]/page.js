import React from 'react';
import Markdoc from '@markdoc/markdoc';

import Prose from '@/components/Prose';
import OnThisPage from '@/components/OnThisPage';
import { getDocContent } from '@/utils/getDocContent';
import { collectHeadings } from '@/utils/collectHeadings';

const Page = ({ params }) => {
	const { slug } = { ...params };

	const breadcrumb = slug.join(' / ').replace('.md', '');
	const { content, data } = { ...getDocContent(slug) };
	const ast = Markdoc.parse(content);
	const astTransform = Markdoc.transform(ast);

	const headings = collectHeadings(astTransform.children);

	const documentContent = Markdoc.renderers.react(astTransform, React);

	return (
		<div className='relative w-full h-full flex flex-row justify-between items-start pl-24 pr-16 py-6 gap-20 overflow-y-auto'>
			<div className='w-full flex flex-col gap-2 justify-start items-start'>
				<p className='text-xs font-normal text-slate-600 dark:text-slate-300'>
					{breadcrumb}
				</p>
				<h1 className='text-2xl font-semibold text-sky-700 dark:text-sky-400'>
					{data?.title}
				</h1>
				<Prose className='flex-grow'>{documentContent}</Prose>
			</div>
			<div className='hidden xl:sticky xl:top-[0.5rem] xl:flex xl:flex-row xl:justify-start xl:items-start'>
				<OnThisPage headings={headings} />
			</div>
		</div>
	);
};

export default Page;
