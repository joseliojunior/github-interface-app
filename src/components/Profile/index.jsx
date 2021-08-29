import React from 'react';
import useGithub from '../../hooks/GithubHooks';
import * as $ from './styled';
import translation, { strings } from '../../services/translation';

export const Profile = () => {
    const { githubState } = useGithub();
    const { labels } = strings.header;

    const rendable = (state, label) => {
        if (state) {
            if (label === 'Blog') {
                return (
                    <$.UserNameWrapper>
                        <h3>{label}:</h3>
                        <a
                            href={state.match(/(https|http):\/{2}/) ? state : `https://${state}`}
                            target="_blank"
                            rel="noreferrer">
                            {state}
                        </a>
                    </$.UserNameWrapper>
                );
            }
            return (
                <$.UserNameWrapper>
                    <h3>{translation(labels[label])}:</h3>
                    <span>{state}</span>
                </$.UserNameWrapper>
            );
        }
    };

    return (
        <$.Wrapper>
            <$.UserAvatar src={githubState.user.avatar} alt="User avatar" />
            <$.UserInfoWrapper>
                <h1>{githubState.user.name}</h1>
                <$.UserNameWrapper>
                    <h3>{translation(labels.username)}:</h3>
                    <a
                        href={githubState.user.htmlUrl}
                        target="_blank"
                        rel="noreferrer">
                        {githubState.user.login}
                    </a>
                </$.UserNameWrapper>
                {rendable(githubState.user.blog, 'Blog')}
                {rendable(githubState.user.company, 'company')}
                {rendable(githubState.user.location, 'location')}
                <$.UserStatusWrapper>
                    <div>
                        <h3>{translation(labels.followers)}</h3>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h3>{translation(labels.following)}</h3>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h3>Gists</h3>
                        <span>{githubState.user.publicGists}</span>
                    </div>
                    <div>
                        <h3>{translation(labels.repositories)}</h3>
                        <span>{githubState.user.publicRepos}</span>
                    </div>
                </$.UserStatusWrapper>
            </$.UserInfoWrapper>
        </$.Wrapper>
    );
};