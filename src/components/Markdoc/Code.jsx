'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import copy from 'copy-to-clipboard';

import { RxCopy } from 'react-icons/rx';

const Code = ({ children, 'data-language': language, isDisplay = false }) => {
	return (
		<div className='h-full group relative w-auto' aria-live='polite'>
			<SyntaxHighlighter
				language={language}
				style={tomorrow}
				showLineNumbers={isDisplay}
				showInlineLineNumbers={true}
				customStyle={{
					background: '#020617',
					fontSize: '0.8rem',
					boxShadow: 'none',
					borderRadius: '0.5rem',
					padding: '16px',
				}}
			>
				{String(children ?? '').replace(/\n+$/, '')}
			</SyntaxHighlighter>
			{!isDisplay && (
				<button
					className='absolute top-2 right-2'
					onClick={() => copy(children)}
				>
					<RxCopy className='w-5 h-5 text-slate-600 hover:text-slate-400' />
				</button>
			)}
			{!isDisplay && (
				<p className='hidden group-hover:block absolute -top-2 right-10 text-xs font-base text-slate-400'>
					{language}
				</p>
			)}
		</div>
	);
};

export default Code;
