import fs from 'fs-extra';

export const getOrderedListOfFiles = () => {
	const documentList = [];

	const folders = fs
		.readdirSync('./docs', { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.sort();

	for (const { name } of folders) {
		const pages = fs
			.readdirSync(`./docs/${name}`)
			.filter((page) => page.endsWith('.md'))
			.sort();

		documentList.push(...pages);
	}

	return documentList;
};
