import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';

import { pathToTitleCase } from './pathToTitleCase';

/* 
    In the `docs/` directory, you must place your markdown files in respective folders like so: 

    docs/
       introduction/ 
         gettingstarted.md
         installation.md

    Rogue files within the `docs/` directory will be ignored, like: 

    docs/
        ihavenoplace.md
*/
export const generateSidebarContent = (docsDir) => {
	return fs
		.readdirSync(docsDir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => {
			const sectionName = entry?.name ?? '';
			const sectionNameTitleCase = pathToTitleCase(sectionName);
			const sectionPath = path.join(docsDir, sectionName);
			const pages = fs
				.readdirSync(sectionPath)
				.filter((page) => page.endsWith('.md'))
				.map((page) => {
					const slug = `/docs/${sectionName}/${page}`;
					const pageName = page.replace(/\.md$/, '');
					const fileContents = fs.readFileSync(
						path.join(process.cwd(), slug),
						'utf8'
					);
					const { data } = { ...matter(fileContents) };
					const { title } = { ...data };

					return {
						name: title ?? pageName,
						path: slug,
					};
				});

			return { sectionNameTitleCase, pages };
		});
};
