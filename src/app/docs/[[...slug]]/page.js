import DocumentLayout from '@/components/DocumentLayout';
import Breadcrumb from '@/components/Breadcrumb';

import { getDocContent } from '@/utils/getDocContent';
import { markdownToReact } from '@/utils/markdownToReact';

const Page = ({ params }) => {
	const { slug: slugArray } = { ...params };

	// const breadcrumb = slugArray.join(' / ').replace('.md', '');

	const { content, data } = { ...getDocContent({ slugArray }) };
	const { headings, documentContent } = { ...markdownToReact(content) };

	return (
		<DocumentLayout
			breadcrumb={<Breadcrumb slugArray={slugArray} />}
			title={data?.title}
			documentContent={documentContent}
			headings={headings}
		/>
	);
};

export default Page;
