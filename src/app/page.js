import DocumentLayout from '@/components/DocumentLayout';
import { getDocContent } from '@/utils/getDocContent';
import { markdownToReact } from '@/utils/markdownToReact';

export default function Home() {
	const { content, data } = { ...getDocContent({ home: true }) };
	const { headings, documentContent } = { ...markdownToReact(content) };

	return (
		<DocumentLayout
			frontmatter={data}
			documentContent={documentContent}
			headings={headings}
		/>
	);
}
