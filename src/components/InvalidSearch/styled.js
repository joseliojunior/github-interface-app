import styled from 'styled-components';
import { PersonQuestionMark } from '@styled-icons/fluentui-system-filled';

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

export const UnknowUser = styled(PersonQuestionMark)`
    height: 200px;
`;