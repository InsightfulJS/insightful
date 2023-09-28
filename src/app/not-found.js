import React from 'react';
import { FiFile } from 'react-icons/fi';

const notFound = () => {
	return (
		<div className='w-full h-full p-24 flex flex-wrap justify-center items-center gap-8'>
			<p className='text-lg font-bold text-slate-100'>Page Not Found</p>
			<FiFile className='w-8 h-8 text-slate-300' />
			<p className='text-base text-slate-300'>
				The URL you have browsed to does not seem to map to any file
				<br />
				contents, please check again, or alternatively{' '}
				<a href='/' className='font-normal text-sky-300 '>
					navigate home
				</a>
			</p>
		</div>
	);
};

export default notFound;
