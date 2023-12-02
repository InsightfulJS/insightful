import './globals.css';
import path from 'path';
import { Suspense } from 'react';
import { Inter as Font } from 'next/font/google';
import { ThemeProvider } from '@/themes/ThemeProvider';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { NavigationEvents } from '@/components/navigation-events';
import { generateSidebarContent } from '@/utils/generateSidebarContent';

const font = Font({
	subsets: ['latin'],
});

export const metadata = {
	title: 'Insightful',
	description: 'Static Markdown Documentation Site',
};

export default function RootLayout({ children }) {
	const docsDir = path.join(process.cwd(), 'docs');
	const content = generateSidebarContent(docsDir);

	return (
		<html lang='en'>
			<body className={font.className}>
				<Suspense fallback={null}>
					<NavigationEvents />
				</Suspense>
				<ThemeProvider attribute='class' defaultTheme='light'>
					<main className='flex h-screen flex-col items-start justify-start bg-gradient-to-br from-white to-slate-100 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800'>
						<Header content={content} />
						<div className='m-auto max-w-[2200px] h-[calc(100vh-3.5rem)] flex flex-row justify-start items-start gap-8'>
							<div className='hidden relative min-w-[240px] w-[24%] h-full flex-col sm:block'>
								<Sidebar content={content} />
							</div>
							{children}
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
