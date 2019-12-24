import React from 'react'
import Section from '../Section';

function ProjectsSection({ data }) {
	return (
		<Section isCentered>
			<h2>recent projects</h2>
			{data.map(({ title, link }, index) => {
				return (
					<div key={index}>
						<a href={link}>{title}</a>
					</div>
				)
			})}
		</Section>
	)
}

export default ProjectsSection;