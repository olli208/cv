import styled from 'styled-components';

const StyledLink = styled.a`
	color: inherit;
	font-weight: 700;
	text-decoration: none;
	transition: 200ms ease-in;
	text-transform: uppercase;

	&:hover {
		text-decoration: underline
	}
`

export default StyledLink