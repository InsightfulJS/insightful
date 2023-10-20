import React from 'react';
import Image from 'next/image';

const DocumentHero = ({ src }) => {
	return (
		<Image
			src={src}
			loading='eager'
			width={0}
			height={0}
			sizes='100vw'
			style={{ width: '100%', height: 'auto' }}
			alt='Banner image for document'
		/>
	);
};

export default DocumentHero;
