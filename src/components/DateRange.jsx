import React from 'react';
import FlexWrapper from './FlexWrapper'

// add date parser for date objects ?
function DateRange({ startDate, endDate, endDateMessage = '-' }) {
	return (
		<FlexWrapper>
			<span>{startDate} - {endDate ? endDate : endDateMessage}</span>
		</FlexWrapper>
	)
}

export default DateRange;