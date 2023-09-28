import { nodes } from '@markdoc/markdoc';

import Callout from './Callout';
import CodeBlock from './CodeBlock';

const config = {
	nodes: {
		fence: {
			render: CodeBlock,
			attributes: nodes.fence.attributes,
		},
	},
	tags: {
		callout: {
			render: 'Callout',
			attributes: {
				type: {
					type: String,
					default: 'default type',
				},
				title: {
					type: String,
					default: 'default title',
				},
			},
		},
	},
};

const components = {
	Callout,
	Fence: CodeBlock,
};

export { config, components };
