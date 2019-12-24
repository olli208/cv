import React from 'react'
import Section from '../Section'

function OtherSection({ data }) {
	return (
		<Section isCentered>
			<h2>other stuff</h2>
			{data.map((el, index) => {
				return console.log(el)
			})}
		</Section>
	)
}

export default OtherSection;