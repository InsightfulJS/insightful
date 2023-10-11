import { notFound } from 'next/navigation';

import fs from 'fs-extra';
import matter from 'gray-matter';

export const getDocContent = ({ slugArray = [], home = false }) => {
	if (home) {
		const file = `src/docs/home.md`;
		const content = fs.readFileSync(file, 'utf8');
		return matter(content);
	}

	const file = `src/docs/${slugArray.join('/')}`;

	const doesNotExist = !fs.existsSync(file);
	const isDirectory = fs.existsSync(file) && fs.lstatSync(file).isDirectory();
	if (doesNotExist || isDirectory) {
		notFound();
	}

	const content = fs.readFileSync(file, 'utf8');
	return matter(content);
};
