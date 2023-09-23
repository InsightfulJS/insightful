import Markdown from 'markdown-to-jsx';
import Markdoc from '@markdoc/markdoc';
import { getDocContent } from '@/utils/getDocContent';

const Page = ({ params }) => {
	const { slug } = { ...params };

	const page = getDocContent(slug);
	const ast = Markdoc.parse(page?.content);

	ast.children.map((child) => {
		if (child.type == 'heading') {
			console.log(child.children);
		}
	});

	const content = Markdoc.transform(ast);
	const html = Markdoc.renderers.html(content);
	const breadcrumb = slug.join('/');

	return (
		<div>
			<Markdown>{html}</Markdown>
		</div>
	);
};

export default Page;
