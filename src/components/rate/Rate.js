import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useState } from 'react';
const StarsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Star = styled.span`
	path {
		fill: ${({ selected }) => (selected ? 'orange' : 'gray')};
	}
`;

const Rate = ({ onClick, starsSelected }) => {
	const renderStars = () => {
		const stars = [];

		for (let i = 0; i < 5; i++) {
			stars.push(
				<Star key={i} selected={i < starsSelected} onClick={onClick}>
					<FontAwesomeIcon icon={faStar} size="2x" />
				</Star>
			);
		}
		return stars;
	};
	return <StarsContainer>{renderStars()}</StarsContainer>;
};
export default Rate;
