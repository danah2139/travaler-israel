import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 74%;
	font-size: 1.1em;
	display: flex;
	justify-content: center;
	align-items: center;

	form {
		display: flex;
		border-radius: 5px;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 5px;
		${'' /* background-color: rgba(250, 250, 250, 0.9); */}
		width: 45em;
	}

	label {
		padding: 5px;
	}

	select,
	input[type='number'] {
		width: 200px;
		height: 30px;
	}

	.title {
		font-weight: 700;
	}

	input[type='checkbox'] {
		width: 20px;
		height: 20px;
	}

	input[type='submit'] {
		padding: 0.25em 1em;
		border: 2px solid;
		border-radius: 3px;
		${'' /* color: palevioletred; */}
		font-size: 1em;
		cursor: pointer;

		${'' /* width: 50px; */}
	}
`;
