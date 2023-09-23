import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const Page = ({ params }) => {
	console.log(params);
	return <div>DocumentPage</div>;
};

export default Page;
