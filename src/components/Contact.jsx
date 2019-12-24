import React from 'react';
import FlexWrapper from './FlexWrapper';
import styled from 'styled-components';

const StyledLink = styled.a`
	color: inherit;
	font-weight: 700;
	text-decoration: none;
	transition: 200ms ease-in;

	&:hover {
		text-decoration: underline
	}
`

const LinkWrapper = styled(FlexWrapper).attrs({
	as: 'p',
	direction: 'column'
})`
	width: 50%;
`

function Contact() {
	return (
		<>
			<FlexWrapper justifyContent='space-between' isFullWidth>
				<LinkWrapper as='p' direction='column'>
					contact
					<StyledLink href="https://www.linkedin.com/in/oliver-oenang/">LinkedIn</StyledLink>
				</LinkWrapper>
				<LinkWrapper as='p' direction='column'>
					github
					<StyledLink href="https://github.com/olli208/">olli208</StyledLink>
				</LinkWrapper>
			</FlexWrapper>
		</>
	)
}

export default Contact;