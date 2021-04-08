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

const Rate = ({ handleStarSelected, routeSelected }) => {
	const [starsSelected, setStarsSelected] = useState(0);
	const handleClick = (i) => {
		setStarsSelected(i + 1);
		handleStarSelected(routeSelected, starsSelected);
	};

	const renderStars = () => {
		const stars = [];

		for (let i = 0; i < 5; i++) {
			stars.push(
				<Star
					key={i}
					selected={i < starsSelected}
					onClick={() => handleClick(i)}
				>
					<FontAwesomeIcon icon={faStar} size="2x" />
				</Star>
			);
		}
		return stars;
	};
	return (
		<div>
			<h3>Rate the Route:</h3>
			<StarsContainer>{renderStars()}</StarsContainer>{' '}
			<p>
				<span style={{ fontWeight: 700 }}>{starsSelected}</span> of 5 stars
			</p>
		</div>
	);
};
export default Rate;
