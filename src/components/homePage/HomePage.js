import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100vw;
	height: 70%;
	text-align: center;
	display: flex;
	color: ${({ theme }) => theme.primaryLight};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: url('./img/home.jpg') no-repeat center center;
	margin-bottom: 5px;

	p {
		font-size: 1.2rem;
		font-weight: 700;
	}
`;

const HomePage = () => {
	return (
		<Wrapper>
			<h2>EXPLORE ISRAEL</h2>
			<p>Hi, my name is Dana. Join me to explore Israel as much I love it😄</p>
		</Wrapper>
	);
};
export default HomePage;
