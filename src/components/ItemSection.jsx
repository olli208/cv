import React from 'react';
import Section from './Section';

function ItemSection({ title, children }) {
	return (
		<Section isCentered>
			{title && <h2>{title}</h2>}
			{children}
		</Section>
	)
}

export default ItemSection