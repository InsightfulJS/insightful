import React from 'react';
import Image from 'next/image';

const DocumentHero = ({ src }) => {
	return (
		<Image
			alt='Banner image for document'
			src={src}
			width={0}
			height={0}
			sizes='100vw'
			style={{ width: '100%', height: 'auto' }}
		/>
	);
};

export default DocumentHero;
