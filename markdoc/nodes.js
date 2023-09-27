import { Fence } from '@/components/Fence';

const nodes = {
	document: {
		render: undefined,
	},
	fence: {
		render: Fence,
		attributes: {
			language: {
				type: String,
			},
		},
	},
};

export default nodes;
