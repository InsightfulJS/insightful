import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { collectHeadings } from '@/utils/collectHeadings';

export const markdownToReact = (markdown) => {
	const ast = Markdoc.parse(markdown);
	const astTransform = Markdoc.transform(ast);

	const headings = collectHeadings(astTransform.children);
	const documentContent = Markdoc.renderers.react(astTransform, React);

	return { headings, documentContent };
};
