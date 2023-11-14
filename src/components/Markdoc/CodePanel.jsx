import { cloneElement } from 'react';

const CodePanel = ({ children }) => {
	const newChild = cloneElement(children, {
		isDisplay: true,
	});

	return (
		<div className='group code relative w-auto flex flex-col bg-slate-950 rounded-lg'>
			<div className='flex flex-row px-4 gap-2 justify-start bg-slate-950 dark:bg-slate-900 py-3 rounded-t-lg'>
				<span className='w-2.5 h-2.5 rounded-full bg-red-400/80'></span>
				<span className='w-2.5 h-2.5 rounded-full bg-orange-400/80'></span>
				<span className='w-2.5 h-2.5 rounded-full bg-green-400/80'></span>
			</div>

			{newChild}
		</div>
	);
};

const codepanel = {
	render: CodePanel,
	attributes: {
		language: {
			type: String,
			default: 'default title',
		},
	},
};

export { CodePanel, codepanel };
