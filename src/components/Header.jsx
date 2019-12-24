import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import FlexWrapper from './FlexWrapper';
import Avatar from './Avatar';
import Contact from './Contact';


const StyledHeader = styled.header`
  background: #D3D3D3;
`

function Header({ data }) {
	const { name, description } = data;

	return (
		<StyledHeader>
			<Section isCentered>
				<FlexWrapper justifyContent='center'>
					<FlexWrapper>
						<Avatar />
						<div>
							<h1>{name}</h1>
							<p>
								{description}
							</p>
						</div>
					</FlexWrapper>
				</FlexWrapper>
				<Contact />
			</Section>
		</StyledHeader>
	)
}

export default Header;