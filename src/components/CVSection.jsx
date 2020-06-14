import React from 'react';
import styled from 'styled-components';
import ItemSection from './ItemSection';
import DateRange from './DateRange';
import FlexWrapper from './FlexWrapper';
import gif1 from '../img/p1.gif';
import gif2 from '../img/p2.gif';
import gif3 from '../img/p3.gif';
import Project from './Project';
import StyledLink from './StyledLink';

const bgLink = {
	0: gif1,
	1: gif2,
	2: gif3
}

const StyledLocation = styled.span`
	color: #bdbdbd;
`

const Wrapper = styled.div`margin-top: 3.5rem;`

function CVSection({ data }) {
	const { workExperience, education, tools, projects, other } = data;
	const { development, design } = tools[0]; // weird
	const { skills, education: otherEducation } = other[0]; // weird
	const sectionItems = items => items.map((el, index) => <li key={index}>{el}</li>)

	return (
		<>
			<ItemSection title='work experience'>
				{workExperience.map(({ companyName, jobTitle, location, startDate, endDate, description }, index) => (
					<Wrapper key={index}>
						<h3>{companyName}, {jobTitle}</h3>
						<StyledLocation>{location}</StyledLocation>
						<DateRange startDate={startDate} endDate={endDate} endDateMessage='present' />

						<p>{description}</p>
					</Wrapper>
				))}
			</ItemSection>

			<ItemSection title='recent projects'>
				{projects.map(({ title, link }, index) => (
					<Wrapper key={index}>
						<Project key={index} style={{ backgroundImage: `url(${bgLink[index]})` }}>
							<h3><StyledLink href={link}>{title}</StyledLink></h3>
						</Project>
					</Wrapper>
				))}
			</ItemSection>

			<ItemSection title='education'>
				{education.map(({ title, startDate, endDate, location, description }, index) => (
					<Wrapper key={index}>
						<h3>{title}</h3>
						<StyledLocation>{location}</StyledLocation>
						<DateRange startDate={startDate} endDate={endDate} endDateMessage='-' />
						{description}
					</Wrapper>
				))}
			</ItemSection>

			<ItemSection title='tools'>
				<h3>development</h3>
				<ul>
					{sectionItems(development)}
				</ul>

				<h3>design</h3>
				<ul>
					{sectionItems(design)}
				</ul>
			</ItemSection>

			<ItemSection title='other'>
				<FlexWrapper>
					<div style={{ marginBottom: '1rem' }}>
						{sectionItems(skills)}
					</div>

					<div>
						{otherEducation.map(({ title, startDate, endDate, location, description }, index) => (
							<div key={index}>
								<h3>{title}</h3>
								<StyledLocation>{location}</StyledLocation>
								<DateRange startDate={startDate} endDate={endDate} endDateMessage='-' />
								{description}
							</div>
						))}
					</div>
				</FlexWrapper>
			</ItemSection>
		</>
	)
}

export default CVSection;