import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useState } from 'react';
const StarsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Rate = () => {
	const renderStars = () => {
		const stars = [];

		for (let i = 0; i < 5; i++) {
			stars.push(
				<div className="star" key={i}>
					<FontAwesomeIcon icon={faStar} size="2x" />
				</div>
			);
		}
		return stars;
	};
	return <StarsContainer>{renderStars()}</StarsContainer>;
};
export default Rate;
