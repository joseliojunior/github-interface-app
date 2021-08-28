import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const TabsWrapper = styled(Tabs)`
    width: 100%;
`;

export const TabListWrapper = styled(TabList)`
    display: flex;
    list-style-type: none;
    padding: 16px 4px 0 0;
`;

export const TabWrapper = styled(Tab)`
    display: flex;
    align-items: center;
    background: ${props => props.theme.color.graffitiBlue0};
    padding: 4px 16px;
    border-radius: 10px 10px 0 0;
    font-size: 1em;
    color: ${props => props.theme.color.graffitiBlue3};
    font-style: oblique;
    cursor: pointer;
    user-select: none;

    &.is-selected {
        margin-bottom: -1px;
        background: ${props => props.theme.color.graffitiBlue2};
        color: inherit;
        font-size: 1.4em;
        font-style: normal;
        font-weight: bold;
        border-bottom: none;
    }

`;

export const TabPanelWrapper = styled(TabPanel)`
    display: none;
    padding: 8px;
    background: ${props => props.theme.color.graffitiBlue2};
    border-radius: 0 8px 8px 8px;

    &.is-selected {
        display: block;
    }
`;

export const ListWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width:100%;
`;