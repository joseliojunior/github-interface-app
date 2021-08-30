import React from 'react';
import * as $ from './styled';
import githubProjectIcon from '../../assets/github-project.png';
import translation, { strings } from '../../services/translation'

const Title = () => {
    const { title } = strings
    return (
    <$.TitleWrapper>
        GitHub Interface
        <a href="https://github.com/joseliojunior/github-interface-app" target="_blank" rel="noreferrer">
            <$.GithubIconBtn>
                <button aria-label={translation(title.ariaLabel)}>
                    <img src={githubProjectIcon} alt={translation(title.alt)}/>
                </button>
            </$.GithubIconBtn>
        </a>
    </$.TitleWrapper>
    )
};

export default Title;