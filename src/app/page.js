import DocumentLayout from '@/components/DocumentLayout';
import Breadcrumb from '@/components/Breadcrumb';
import { getDocContent } from '@/utils/getDocContent';
import { markdownToReact } from '@/utils/markdownToReact';

export default function Home() {
	const { content, data } = { ...getDocContent({ home: true }) };
	const { headings, documentContent } = { ...markdownToReact(content) };

	return (
		<DocumentLayout
			breadcrumb={<Breadcrumb />}
			title={data?.title}
			documentContent={documentContent}
			headings={headings}
		/>
	);
}
