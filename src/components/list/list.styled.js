import styled from 'styled-components';

export const StyledList = styled.div`
	display: flex;
	width: 90%;
	${'' /* justify-content: space-between; */}
	flex-direction:column;
	${'' /* align-items: center; */}
	padding: 1rem;
	${'' /* flex-wrap: wrap; */}
	overflow: scroll;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
	}

	a {
		font-size: 0.7rem;
		text-transform: uppercase;
		background-color: rgba(250, 250, 250, 0.6);
		padding: 0.5rem 2rem;
		font-weight: bold;
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 2px solid;
		${'' /* display: block; */}
		border-radius: 15px;
		margin-bottom: 1rem;
		color: ${({ theme }) => theme.primaryHover};
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: ${({ theme }) => theme.blue};
		}
		h3,
		p {
			text-align: left;
		}
	}
`;

export const Wrapper = styled.div`
	width: 100vw;
	text-align: center;
	display: flex;
	flex-direction: column;
	h2 {
		color: ${({ theme }) => theme.primaryHover};
	}
`;
