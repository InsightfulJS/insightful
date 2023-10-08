'use client';

import * as React from 'react';
import copy from 'copy-to-clipboard';
import Prism from 'prismjs';

import { RxCopy } from 'react-icons/rx';

const CodeBlock = ({ children, 'data-language': language }) => {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (ref.current) Prism.highlightElement(ref.current, false);
	}, [children]);

	return (
		<div className='group code relative w-auto' aria-live='polite'>
			<pre ref={ref} className={`language-${language} w-full`}>
				{children}
			</pre>
			<button
				className='absolute top-2 right-2'
				onClick={() => copy(children)}
			>
				<RxCopy className='w-5 h-5 text-slate-600 hover:text-slate-400' />
			</button>
			<p className='hidden group-hover:block absolute -bottom-1 right-3 text-xs font-base text-slate-400'>
				{language}
			</p>
			<style jsx>
				{`
					/* Override Prism styles */
					.code :global(pre[class*='language-']) {
						text-shadow: none;
						border-radius: 8px;
						background-color: #020617;
					}
				`}
			</style>
		</div>
	);
};

export default CodeBlock;
