import clsx from 'clsx';

import { MdOutlineError } from 'react-icons/md';
import { PiWarningFill } from 'react-icons/pi';
import { FaInfoCircle, FaLightbulb } from 'react-icons/fa';

const styles = {
	tip: 'bg-green-300',
	warning: 'bg-orange-300',
	info: 'bg-sky-300',
	error: 'bg-red-300',
};

const textStyles = {
	tip: 'text-green-700 dark:text-green-200',
	warning: 'text-orange-700 dark:text-orange-200',
	info: 'text-sky-800 dark:text-sky-200',
	error: 'text-red-700 dark:text-red-200',
};

const icons = {
	tip: <FaLightbulb className='text-green-700 dark:text-green-200 w-5 h-5' />,
	warning: (
		<PiWarningFill className='text-orange-700 dark:text-orange-200 w-6 h-6' />
	),
	info: <FaInfoCircle className='text-sky-800 dark:text-sky-200 w-5 h-5' />,
	error: (
		<MdOutlineError className='text-red-700 dark:text-red-200 w-6 h-6' />
	),
};

const Callout = ({ type = 'info', title, children }) => {
	return (
		<div
			className={clsx(
				'my-8 flex flex-col gap-1 justify-start items-center px-6 py-3 rounded-lg bg-opacity-50',
				styles[type]
			)}
		>
			<div className='w-full flex flex-row gap-4 justify-start items-center'>
				{icons[type]}
				<p className={clsx('font-semibold m-0', textStyles[type])}>
					{title}
				</p>
			</div>
			<div
				className={clsx('w-full m-0 text-left prose', textStyles[type])}
			>
				{children}
			</div>
		</div>
	);
};

export default Callout;
