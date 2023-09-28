import Callout from './Callout';

const config = {
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
	Callout: Callout,
};

export { config, components };
