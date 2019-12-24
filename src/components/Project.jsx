import styled from 'styled-components';

const Project = styled.div`
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
			color: #000;
			font-weight: 700;
		}
	}
`

export default Project;