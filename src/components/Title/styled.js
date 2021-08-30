import styled from 'styled-components';

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    margin: -16px -16px 0 -16px;
    font-family: 'Exo 2', sans-serif;
    font-size: 2em;
    height: 1.8em;
`;

export const GithubIconBtn = styled.div`
    button {
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        cursor: pointer;
        background: none;
    }

    [aria-label] {
        position: relative;
    }

    [aria-label]::after {
        content: attr(aria-label);
        opacity: 0;
        position: absolute;
        top: 35px;
        right: 35px;
        z-index: 1000;
        pointer-events: none;
        padding: 8px 10px;
        width: 140px;
        border-radius: 2em 4px 2em 2em;
        font-size: 1.2em;
        text-align: center;
        color: ${props => props.theme.color.graffitiBlue4};
        background: ${props => props.theme.color.graffitiBlue2};
        transition: all .4s ease .2s;
    }

    [aria-label]:hover::after {
        transition: all .4s ease 1s;
        opacity: 100;
    }

    img {
        width: 100%;
    }  
`;
