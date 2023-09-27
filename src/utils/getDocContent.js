import fs from 'fs-extra';
import matter from 'gray-matter';

export const getDocContent = ({ slugArray = [], home = false }) => {
	if (home) {
		const file = `docs/home.md`;
		const content = fs.readFileSync(file, 'utf8');
		return matter(content);
	}

	const file = `docs/${slugArray.join('/')}`;
	const content = fs.readFileSync(file, 'utf8');
	return matter(content);
};
