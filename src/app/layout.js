import 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/themes/prism-tomorrow.css';

import './globals.css';
import { Red_Hat_Text } from 'next/font/google';
import { ThemeProvider } from '@/themes/ThemeProvider';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const font = Red_Hat_Text({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
});

export const metadata = {
	title: 'Insightful',
	description: 'Static Markdown Documentation Site',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ThemeProvider attribute='class' defaultTheme='light'>
					<main className='flex h-screen flex-col items-start justify-start bg-gradient-to-br from-slate-100 to-slate-200 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800'>
						<Header />
						<div className='w-full h-full flex flex-row justify-start items-start gap-6'>
							<Sidebar />
							{children}
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
