import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;

	span {
		font-weight: 700;
	}

	.content,
	.rate {
		background: white;
		border-radius: 15px;
		margin: 10px;
		padding: 5px;
	}
	.content {
		margin-bottom: 20px;
	}

	.rate {
		height: 10rem;
	}
`;
