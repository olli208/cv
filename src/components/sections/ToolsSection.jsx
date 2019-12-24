import React from 'react';
import Section from '../Section'

function ToolsSection({ data }) {
	return (
		<Section isCentered>
			<h2>Tools</h2>
			<h3>development</h3>
			<ul>
				{data.map(({ development }) => {
					return development.map((el, index) => <li key={index}>{el}</li>)
				})}
			</ul>

			<h3>design</h3>
			<ul>
				{data.map(({ design }) => {
					return design.map((el, index) => <li key={index}>{el}</li>)
				})}
			</ul>
		</Section>
	)
}

export default ToolsSection;