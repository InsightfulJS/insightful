'use client';
import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ExpandImage = ({ src, alt, width }) => {
	return (
		<Zoom>
			<Image
				alt={alt}
				src={src}
				width={0}
				height={0}
				sizes='100vw'
				style={{ width, height: 'auto' }}
			/>
		</Zoom>
	);
};

export default ExpandImage;
