import { BiLogoGithub } from 'react-icons/bi';
import { AiFillGitlab } from 'react-icons/ai';
import { IoLogoBitbucket } from 'react-icons/io';

import config from '@/config/config';
import DynamicLogo from './DynamicLogo';
import ThemeToggle from './ThemeToggle';
import Search from './Search';

const icons = {
	bitbucket: IoLogoBitbucket,
	gitlab: AiFillGitlab,
	github: BiLogoGithub,
};

const Header = () => {
	const { repoIcon = 'github' } = { ...config };
	const Icon = repoIcon in icons ? icons[repoIcon] : icons['github'];

	return (
		<div className='w-full h-14 flex flex-row px-4 py-2 gap-4 justify-between items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800'>
			{/* Logo */}
			<DynamicLogo />

			{/* Search Bar  */}
			<Search />

			{/* Control Buttons */}
			<div className='flex flex-row gap-6 justify-end items-center flex-grow basis-0'>
				<ThemeToggle />
				<a target='_blank' href={config?.repoLink ?? ''}>
					<Icon className='text-slate-700 dark:text-slate-300 w-6 h-6' />
				</a>
			</div>
		</div>
	);
};

export default Header;
