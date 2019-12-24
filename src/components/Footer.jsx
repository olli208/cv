import React, { useMemo } from 'react'
import styled from 'styled-components'
import Section from './Section'


const StyledFooter = styled.footer`
	background: #3f3f3f;
	color: #f9f9f9;	
`

function Footer() {
	const currentYear = useMemo(() => new Date().getFullYear(), [])

	return (
		<StyledFooter>
			<Section noMargin style={{ textAlign: 'right', width: '100%' }}>
				<p>OLIVER OENANG <span>{currentYear}</span></p>
			</Section>
		</StyledFooter>
	)
}


export default Footer;