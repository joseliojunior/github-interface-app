import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        border: none;
        outline: none;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.color.graffitiBlue4};
        -webkit-tap-highlight-color: transparent;
    }

    * ::-webkit-scrollbar {
        width: 8px;
        background: ${props => props.theme.color.graffitiBlue0};
    }

    * ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.color.graffitiBlue2};
        border-radius: 4px;
    }

    body {
        background: ${props => props.theme.color.graffitiBlue1};
    }

    a {
        color: ${props => props.theme.color.pastelBlue};
        font-weight: bold;
        font-style: italic;
    }
    a:hover {
        color: ${props => props.theme.color.pastelOrange};
    }

`;