'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	solarizedlight,
	tomorrow,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

import copy from 'copy-to-clipboard';

import { RxCopy } from 'react-icons/rx';

const Code = ({ children, 'data-language': language, isDisplay = false }) => {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className='h-full group relative w-auto' aria-live='polite'>
			{theme == 'dark' && (
				<SyntaxHighlighter
					language={language}
					style={tomorrow}
					showLineNumbers={isDisplay}
					showInlineLineNumbers={true}
					customStyle={{
						background: '#0f172a',
						fontSize: '0.8rem',
						boxShadow: 'none',
						borderRadius: '0.5rem',
						padding: '16px',
						border: '1px solid',
						borderColor: '#1e293b',
					}}
				>
					{String(children ?? '').replace(/\n+$/, '')}
				</SyntaxHighlighter>
			)}
			{theme == 'light' && (
				<SyntaxHighlighter
					language={language}
					style={solarizedlight}
					showLineNumbers={isDisplay}
					showInlineLineNumbers={true}
					customStyle={{
						background: '#f1f5f9',
						fontSize: '0.8rem',
						boxShadow: 'none',
						borderRadius: '0.5rem',
						padding: '16px',
						border: '1px solid',
						borderColor: '#cbd5e1',
					}}
				>
					{String(children ?? '').replace(/\n+$/, '')}
				</SyntaxHighlighter>
			)}
			{!isDisplay && (
				<button
					className='absolute top-2 right-2'
					onClick={() => copy(children)}
				>
					<RxCopy className='w-5 h-5 text-slate-400 hover:text-slate-400' />
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
