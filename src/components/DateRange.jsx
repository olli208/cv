import React from 'react';
import FlexWrapper from './FlexWrapper'

function DateRange({ startDate, endDate, endDateMessage = '-' }) {
	return (
		<FlexWrapper>
			<span>{startDate} - {endDate ? endDate : endDateMessage}</span>
		</FlexWrapper>
	)
}

export default DateRange;