import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 70%;
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 20em;
	}

	label {
		padding: 5px;
	}

	input[type='submit'] {
		padding: 0.25em 1em;
		border: 2px solid;
		border-radius: 3px;
		${'' /* color: palevioletred; */}
		font-size: 1em;
		${'' /* width: 50px; */}
	}
`;
