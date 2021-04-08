import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	${'' /* height: 74%; */}
	justify-content: center;
	text-align: left;
	${'' /* overflow: auto; */}
	h2 {
		border-radius: 15px;
		background: white;
		${'' /* text-align: left; */}
		padding: 5px;
	}
	span {
		width: 60%;
	}

	.title {
		font-weight: 700;
	}

	.content {
		${'' /* height: 50%; */}
	}
	p {
		margin-block: 0.5em;
	}

	.content-container {
		height: 98%;
		width: 60%;
	}

	.content,
	.rate {
		border-radius: 15px;
		background: white;

		margin: 10px;
		padding: 5px;
	}
	.content-container {
	}

	.rate {
		height: 10rem;
	}
`;
