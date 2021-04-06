import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;

	span {
		font-weight: 700;
	}

	.content {
		height: 80%;
	}

	.content-container,
	.rate {
		background: white;
		border-radius: 15px;
		margin: 10px;
		padding: 5px;
	}
	.content-container {
		margin-bottom: 20px;
	}

	.rate {
		height: 10rem;
	}
`;
