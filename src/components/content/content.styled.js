import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	height: 70%;

	span {
		font-weight: 700;
	}

	.content {
		height: 50%;
		overflow: auto;
	}
	p {
		margin-block: 0.5em;
	}

	.content-container {
		height: 98%;
	}

	.content,
	.rate {
		border-radius: 15px;
		background: white;

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
