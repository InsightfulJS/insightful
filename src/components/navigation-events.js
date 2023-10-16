'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
	size: 2,
	color: '#7dd3fc',
	className: 'bar-of-progress',
	delay: 80,
});

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
	progress.start();
	progress.finish();
}

export function NavigationEvents() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		progress.start();
		setTimeout(() => {
			progress.finish();
		}, 100);
	}, [pathname, searchParams]);

	return null;
}
