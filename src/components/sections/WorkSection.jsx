import React from 'react';
import Section from '../Section';
import DateRange from '../DateRange'

function WorkSection({ data }) {
	return (
		<Section isCentered>
			<h2>work experience</h2>
			{data.map(({ companyName, jobTitle, location, startDate, endDate, description }, index) => {
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
	)
}

export default WorkSection