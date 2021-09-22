import styled from "styled-components";

export const Container = styled.div`
	width: 80%;
	max-width: 160rem;
	margin: 0 1rem;
	height: 100%;
    padding: 8px 0px;
	color: var(--color-main);
	justify-content: center;
	display: block;
	/* flex-direction: column;
	align-items: center; */


	/* display: flex;
	flex-wrap: wrap; */

	@media ${(props) => props.theme.breakpoints.lg} {
        width: 100%;
        }
`;


export const Section = styled.section`
    width: 1fr;
    display: flex;
    justify-content: center;
    align-items: center;
`