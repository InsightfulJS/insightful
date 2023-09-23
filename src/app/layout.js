import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/themes/ThemeProvider';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Insightful',
	description: 'Static Markdown Documentation Site',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					<main className='flex h-screen flex-row items-start justify-start bg-gradient-to-br from-slate-100 to-slate-300 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800'>
						<Sidebar />
						<div className='w-full h-full flex flex-col justify-start items-start gap-6'>
							<Header />
							{children}
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
