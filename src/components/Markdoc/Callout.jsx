import clsx from 'clsx';

import { MdOutlineError } from 'react-icons/md';
import { PiWarningFill } from 'react-icons/pi';
import { FaInfoCircle, FaLightbulb } from 'react-icons/fa';

const styles = {
	tip: 'bg-green-300/30 dark:bg-green-800/40',
	warning: 'bg-orange-300/30 dark:bg-orange-800/40',
	info: 'bg-sky-300/30 dark:bg-sky-800/40',
	error: 'bg-red-300/30 dark:bg-red-800/40',
};

const textStyles = {
	tip: 'text-green-700 dark:text-green-200',
	warning: 'text-orange-700 dark:text-orange-200',
	info: 'text-sky-800 dark:text-sky-200',
	error: 'text-red-700 dark:text-red-200',
};

const icons = {
	tip: <FaLightbulb className='text-green-700 dark:text-green-200 w-4 h-4' />,
	warning: (
		<PiWarningFill className='text-orange-700 dark:text-orange-200 w-5 h-5' />
	),
	info: <FaInfoCircle className='text-sky-800 dark:text-sky-200 w-4 h-4' />,
	error: (
		<MdOutlineError className='text-red-700 dark:text-red-200 w-5 h-5' />
	),
};

const Callout = ({ type = 'info', title, children }) => {
	return (
		<div
			className={clsx(
				'my-8 flex flex-col gap-1 justify-start items-start px-6 py-3 rounded-lg bg-opacity-50',
				styles[type]
			)}
		>
			<div className='w-full flex flex-row gap-3 justify-start items-center'>
				{icons[type]}
				<p
					className={clsx(
						'font-semibold m-0 text-sm',
						textStyles[type]
					)}
				>
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

const callout = {
	render: 'Callout',
	attributes: {
		type: {
			type: String,
			default: 'default type',
		},
		title: {
			type: String,
			default: 'default title',
		},
	},
};

export { Callout, callout };
