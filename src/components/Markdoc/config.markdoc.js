import { nodes, Tag } from '@markdoc/markdoc';

import Callout from './Callout';
import CodeBlock from './CodeBlock';
import CodePanel from './CodePanel';
import FancyLink from './FancyLink';
import Tabs from './Tabs';
import Tab from './Tab';
import ExpandImage from './ExpandImage';
import Banner from './Banner';
import GlowBanner from './GlowBanner';

const config = {
	nodes: {
		fence: {
			render: CodeBlock,
			attributes: {
				...nodes.fence.attributes,
				showLineNumbers: {
					type: Boolean,
					default: false,
				},
			},
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
		codepanel: {
			render: CodePanel,
			attributes: {
				language: {
					type: String,
					default: 'default title',
				},
			},
		},
		fancylink: {
			render: FancyLink,
			attributes: {
				title: {
					type: String,
					default: 'default title',
				},
				link: {
					type: String,
					default: 'link href',
				},
				icon: {
					type: String,
					default: 'link',
				},
			},
		},
		tabs: {
			render: 'Tabs',
			attributes: {},
			transform(node, config) {
				const labels = node
					.transformChildren(config)
					.filter((child) => child && child.name === 'Tab')
					.map((tab) =>
						typeof tab === 'object' ? tab.attributes.label : null
					);

				return new Tag(
					this.render,
					{ labels },
					node.transformChildren(config)
				);
			},
		},
		tab: {
			render: 'Tab',
			attributes: {
				label: {
					type: String,
				},
			},
		},
		'expandable-image': {
			render: 'ExpandImage',
			attributes: {
				src: {
					type: String,
				},
				img: {
					type: String,
				},
				width: {
					type: String,
					default: '100%',
				},
			},
		},
		banner: {
			render: 'Banner',
			attributes: {
				title: {
					type: String,
				},
				text: {
					type: String,
				},
				href: {
					type: String,
				},
			},
		},
		glowbanner: {
			render: 'GlowBanner',
			attributes: {
				title: {
					type: String,
				},
				text: {
					type: String,
				},
				href: {
					type: String,
				},
			},
		},
	},
};

const components = {
	Callout,
	CodePanel,
	Tabs,
	Tab,
	ExpandImage,
	Banner,
	GlowBanner,
	Fence: CodeBlock,
};

export { config, components };
