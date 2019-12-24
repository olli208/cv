import React from 'react';
import Section from '../Section';
import DateRange from '../DateRange'

function EducationSection({ data }) {
	return (
		<Section isCentered>
			<h2>education</h2>
			{data.map(({ title, startDate, endDate, location, description }, index) => {
				return (
					<div key={index}>
						<h3>{title}</h3>
						<span>{location}</span>
						<DateRange startDate={startDate} endDate={endDate} endDateMessage='-' />
						{description}
					</div>
				)
			})}
		</Section>
	)
}

export default EducationSection;