import React from 'react';
import styled from 'styled-components';
import FlexWrapper from './FlexWrapper';
import Section from './Section';

const SectionTitle = styled.h2`
  margin: 0;
`

// section for work
// section for education
// section for tools 
//  section for latest projects (if there are better ones )? 

function DateRange({ startDate, endDate, endDateMessage = '-' }) {
	return (
		<FlexWrapper>
			<span>{startDate} - {endDate ? endDate : endDateMessage}</span>
		</FlexWrapper>
	)
}

function CVSection({ data }) {
	const { workExperience, education } = data;

	return (
		<>
			<Section>
				<SectionTitle>work experience</SectionTitle>
				{workExperience.map(({ companyName, jobTitle, location, startDate, endDate, description }, index) => {
					return (
						<div key={index}>
							<h3>{companyName}, {jobTitle}</h3>
							<span>{location}</span>
							<DateRange startDate={startDate} endDate={endDate} endDateMessage='present' />

							<p>{description}</p>
						</div>
					)
				})}
			</Section>
			<Section>
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
			</Section>
		</>
	)
}

export default CVSection;