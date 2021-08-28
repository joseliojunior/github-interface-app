import styled from "styled-components";

export const Repository = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin: 4px;
    padding: 16px;
    border-radius: 8px;
    background: ${props => props.theme.color.graffitiBlue1};
`;