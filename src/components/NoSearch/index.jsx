import React from 'react';
import translation, { strings } from '../../services/translation';
import * as $ from './styled';

export const NoSearch = () => {
    return (
        <$.Wrapper>
            <$.MessageWrapper>
                <$.UnknowUser />
                <h1>
                    {translation(strings.noSearch.msgPart1)} <$.Hl><$.Magnifier /></$.Hl> {translation(strings.noSearch.msgPart2)} <$.Hl>Enter</$.Hl>
                </h1>
            </$.MessageWrapper>
        </$.Wrapper>
    );
};