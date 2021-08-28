import styled from 'styled-components';

const media = `@media only screen and (orientation:portrait)`;

const Flex = styled.div`
    display: flex;
`;

const Flexblock = styled(Flex)`
    flex-direction: column;
`;

export const Wrapper = styled(Flex)`
    justify-content: flex-start;
    flex-wrap: wrap;

    ${media} {
        & {
            justify-content: center;
        }
    }
`;

export const UserAvatar = styled.img`
    width: 200px;
    border-radius: 200px;
    margin: 8px;
    -webkit-user-drag: none;
`;

export const UserInfoWrapper = styled(Flexblock)`
    margin-left: 8px;
    justify-content: center;

    h1, h3, span {
        font-weight: bold;
    }
    h1 {
        margin-left: 8px;
        font-size: 2em;
    }
    h3 {
        font-size: 1.2em;
    }
    ${media} {
        h1 {
            text-align: center;
        }
    }
`;

export const UserNameWrapper = styled(Flex)`
    align-items: center;
    padding: 0 8px;

    h3 {
        margin-right: 6px;
    }
    ${media} {
        & {
            justify-content: center;
        }
    }
`;

export const UserStatusWrapper = styled(Flex)`
    min-width: 250px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 6px;

    div {
        margin: 8px 5px;
        text-align: center;
    }
    ${media} {
        & {
            margin: 0;
            justify-content: center;
        }
    }
`;