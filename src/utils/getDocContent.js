import fs from 'fs-extra';
import matter from 'gray-matter';

export const getDocContent = (slugArray) => {
	const srcFolder = 'docs';
	const file = `${srcFolder}/${slugArray.join('/')}`;
	const content = fs.readFileSync(file, 'utf8');
	const matterResult = matter(content);
	return matterResult;
};
