import React from 'react';
import styled from 'styled-components';
import profilePicture from '../img/me.png'
import profilePictureXS from '../img/me-xs.png'

const AvatarWrapper = styled.div`
	overflow: hidden;
	height: 100px;
	width: 100px;
	border-radius: 50%;
	@media (min-width: 768px ) {
		height: 150px;
		width: 150px;
	}
		
`

function Avatar() {
	return (
		<AvatarWrapper>
			<picture style={{
				width: '100%',
				height: '100%',
				display: 'flex'
			}}>
				<source media="(min-width: 768px)" srcSet={profilePicture} />
				<img style={{
					objectFit: 'cover',
					height: 'auto',
					width: '100%'
				}} src={profilePictureXS} alt="oliver oenang" />
			</picture>
		</AvatarWrapper>
	)
}

export default Avatar;