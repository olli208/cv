import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: 2em; 
  margin: 0;
`

// section for work
// section for education
// section for tools 
//  section for latest projects (if there are better ones )? 
function CVSection({ data }) {
	const { workExperience, education } = data;

	return (
		<>
			<div>
				<SectionTitle>work experience</SectionTitle>
				{workExperience.map(({ companyName, jobTitle, location, startDate, endDate, description }, index) => {
					return (
						<div key={index}>
							<h3>{companyName}, {jobTitle}</h3>
							<span>{location}</span>
							<span>{startDate}</span>
							<span>{endDate ? endDate : 'present'}</span>

							<p>{description}</p>
						</div>
					)
				})}
			</div>
			<div>
				<SectionTitle>education</SectionTitle>
				{education.map(({ title, startDate, endDate, location, description }, index) => {
					return (
						<div key={index}>
							<h2>{title}</h2>
							<span>{location}</span>
							<span>{startDate}</span>
							<span>{endDate}</span>
							{description}
						</div>
					)
				})}
			</div>
		</>
	)
}

export default CVSection;