import React from 'react';
import * as $ from './styled';
import githubProjectIcon from '../../assets/github-project.png';

const Title = () =>
<$.TitleWrapper>
    Github Interface
    <a href="https://github.com/joseliojunior/github-interface-app" target="_blank" rel="noreferrer">
        <$.GithubIcon src={githubProjectIcon} alt="" srcset="" />
    </a>
</$.TitleWrapper>;

export default Title;