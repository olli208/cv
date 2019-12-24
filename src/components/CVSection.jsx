import React from 'react';
import styled from 'styled-components';
import ItemSection from './ItemSection';
import DateRange from './DateRange';
import StyledLink from './StyledLink'
import FlexWrapper from './FlexWrapper';
import gif1 from '../img/p1.gif';
import gif2 from '../img/p2.gif';
import gif3 from '../img/p3.gif';

const bgLink = {
	0: gif1,
	1: gif2,
	2: gif3
}

const StyledLocation = styled.span`
	color: #bdbdbd;
`

const StyledProject = styled.div`
  & {
		height: 200px;
		width: 300px;
		background-image: linear-gradient(to bottom right, orange, hotpink);
		margin: .5rem 1rem 1rem .25rem;
		border-radius: 10px;
		padding: 10px;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
		border: 1px solid #666666;
		font-family: 'Product Sans', 'Roboto', arial,  sans-serif;
		font-weight: 700;

		& a {
			background: linear-gradient(to bottom right, orange, hotpink);
			background-clip: text;
			fill: transparent;
			font-weight: 700;
		}
	}

`

function CVSection({ data }) {
	const { workExperience, education, tools, projects, other } = data;
	const { development, design } = tools[0];
	const { skills, education: otherEducation } = other[0];
	const sectionItems = items => items.map((el, index) => <li key={index}>{el}</li>)

	return (
		<>
			<ItemSection title='work experience'>
				{workExperience.map(({ companyName, jobTitle, location, startDate, endDate, description }, index) => (
					<div key={index}>
						<h3>{companyName}, {jobTitle}</h3>
						<StyledLocation>{location}</StyledLocation>
						<DateRange startDate={startDate} endDate={endDate} endDateMessage='present' />

						<p>{description}</p>
					</div>
				))}
			</ItemSection>

			<ItemSection title='recent projects'>
				{projects.map(({ title, link }, index) => (
					<div key={index}>
						<StyledProject key={index} style={{ backgroundImage: `url(${bgLink[index]})` }}>
							<h3><a href={link}>{title}</a></h3>
						</StyledProject>
					</div>
				))}
			</ItemSection>

			<ItemSection title='education'>
				{education.map(({ title, startDate, endDate, location, description }, index) => (
					<div key={index}>
						<h3>{title}</h3>
						<StyledLocation>{location}</StyledLocation>
						<DateRange startDate={startDate} endDate={endDate} endDateMessage='-' />
						{description}
					</div>
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