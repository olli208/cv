import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const FlexWrapper = styled(({ children, justifyContent, alignItems }) => <div>{children}</div>)`
	display: flex;
	flex-wrap: wrap;
	justify-content: ${({ justifyContent }) => justifyContent};
	align-items: ${({ alignItems }) => alignItems};
`

FlexWrapper.propTypes = {
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string
}

FlexWrapper.defaultProps = {
	justifyContent: 'flex-start'
}

export default FlexWrapper