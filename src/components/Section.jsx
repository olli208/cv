import styled from 'styled-components'

const Section = styled.section`
	padding: 1rem;
	width: 100%;
	margin: ${({ isCentered, noMargin }) => isCentered ? '0 auto' : noMargin && '0'};
	margin-bottom: ${({ noMargin }) => !noMargin && '2.5rem'};

	@media (min-width: 768px) {
		width: 80%;
	}
	
	@media (min-width: 1024px ) {
		width: 60%;
	}
`

export default Section
