import styled from 'styled-components';
import { Search } from '@styled-icons/fluentui-system-filled';

const media = `@media only screen and (orientation:portrait)`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
`;

export const SearchBar = styled(Wrapper)`
    width: 70%;
    max-width: 600px;
    height: 50%;
    border-radius: 40px;

    &:hover {
        box-shadow: 0 0 10px #06080a;
    }

    input {
        width: 100%;
        height: 100%;
        padding-left: 16px;
        border-radius: 40px 0 0 40px;
        background: ${props => props.theme.color.graffitiBlue2};
        font-size: 1.3em;
    }

    input::placeholder {
        color: ${props => props.theme.color.graffitiBlue1};
        font-style: oblique;
    }

    button {
        height: 100%;
        margin-left: -1px;
        padding:  0 8px;
        border-radius: 0 40px 40px 0;
        background: ${props => props.theme.color.graffitiBlue2};
        cursor: pointer;
    }

    [aria-label] {
        position: relative;
    }

    [aria-label]::after {
        content: attr(aria-label);
        opacity: 0;
        position: absolute;
        top: 110%;
        right: 30%;
        z-index: 999;
        pointer-events: none;
        padding: 8px 10px;
        border-radius: 2em 4px 2em 2em;
        font-size: 1.4em;
        color: ${props => props.theme.color.graffitiBlue4};
        background: ${props => props.theme.color.graffitiBlue2};
        transition: all .4s ease .2s;
    }
    
    [aria-label]:hover::after {
        transition: all .4s ease 1s;
        opacity: 100;
    }

    ${media} {
        & {
            width: 95%;
            height: 70%;
            font-size: 1.35em;
        }
    }

`;

export const Magnifier = styled(Search)`
    height: 80%;
    padding: 0 8px;
    stroke: ${props => props.theme.color.graffitiBlue4};
    stroke-width: 3;

    &:hover {
        fill: ${props => props.theme.color.pastelBlue};
        stroke: ${props => props.theme.color.pastelBlue};
    }  
`;



