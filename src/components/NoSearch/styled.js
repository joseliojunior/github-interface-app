import styled from 'styled-components';
import { PeopleSearch, Search } from '@styled-icons/fluentui-system-filled';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
`;

export const MessageWrapper = styled(Wrapper)`
    height: auto;
    flex-wrap: wrap;
    text-align: center;
    max-height: 100%;
    max-width: 500px;
`;

export const UnknowUser = styled(PeopleSearch)`
    height: 200px;
`;

export const Hl = styled.span`
    display: inline-flex;
    width: fit-content;
    padding: 4px 8px;
    margin: 2px 0;
    background: ${props => props.theme.color.graffitiBlue2};
    border-radius: 8px;
`;

export const Magnifier = styled(Search)`
    width: 1em;
    stroke: ${props => props.theme.color.graffitiBlue4};
    stroke-width: 3;
`;