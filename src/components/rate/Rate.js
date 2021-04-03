import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Rate = () => {
	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<div className="star">
					<FontAwesomeIcon icon={faStar} />
				</div>
			);
		}
		return stars;
	};
	return <div>{renderStars()}</div>;
};
export default Rate;
