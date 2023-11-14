import { nodes, Tag } from '@markdoc/markdoc';

import Code from './Code';
import Tabs from './Tabs';
import Tab from './Tab';
import ExpandImage from './ExpandImage';
import { Callout, callout } from './Callout';
import { FancyLink, fancylink } from './FancyLink';
import { Banner, banner } from './Banner';
import { GlowBanner, glowbanner } from './GlowBanner';

const tabs = {
	render: 'Tabs',
	attributes: {},
	transform(node, config) {
		const labels = node
			.transformChildren(config)
			.filter((child) => child && child.name === 'Tab')
			.map((tab) =>
				typeof tab === 'object' ? tab.attributes.label : null
			);

		return new Tag(this.render, { labels }, node.transformChildren(config));
	},
};

const tab = {
	render: 'Tab',
	attributes: {
		label: {
			type: String,
		},
	},
};

const expandableImage = {
	render: 'ExpandImage',
	attributes: {
		src: {
			type: String,
		},
		alt: {
			type: String,
		},
		width: {
			type: String,
			default: '100%',
		},
	},
};

const markdocExample = {
	render: Code,
	attributes: {},
	transform(node, config) {
		const attributes = node.transformAttributes(config);
		const { content, language } = node.children[0].attributes;

		return new Tag(
			this.render,
			{ ...attributes, 'data-language': language },
			[content]
		);
	},
};

const config = {
	nodes: {
		fence: {
			render: Code,
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
		'expandable-image': expandableImage,
		'markdoc-example': markdocExample,
		callout,
		fancylink,
		tab,
		tabs,
		banner,
		glowbanner,
	},
};

const components = {
	Fence: Code,
	FancyLink,
	Callout,
	Tabs,
	Tab,
	ExpandImage,
	Banner,
	GlowBanner,
};

export { config, components };
