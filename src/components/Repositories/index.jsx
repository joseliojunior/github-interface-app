import React, { useEffect, useState } from 'react';
import * as $ from './styled';
import { RepositoryItem } from '../RepositoryItem';
import useGithub from '../../hooks/GithubHooks';
import translation, { strings } from '../../services/translation';

export const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserToSearchRepos, setHasUserToSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserToSearchRepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);

    return (
    <>
        { hasUserToSearchRepos ? (
            <$.TabsWrapper
                selectedTabClassName = "is-selected"
                selectedTabPanelClassName = "is-selected">
                <$.TabListWrapper>
                    <$.TabWrapper>{translation(strings.repositories.repositoriesTab)}</$.TabWrapper>
                    <$.TabWrapper>{translation(strings.repositories.starredTab)}</$.TabWrapper>
                </$.TabListWrapper>
                <$.TabPanelWrapper>
                    <$.ListWrapper>
                        {githubState.repositories.map((e) => (
                            <RepositoryItem
                                key={e.id}
                                name={e.name}
                                fullName={e.full_name}
                                reposLink={e.full_name} />
                        ))}
                    </$.ListWrapper>
                </$.TabPanelWrapper>
                <$.TabPanelWrapper>
                    <$.ListWrapper>
                        {githubState.starred.map((e) => (
                            <RepositoryItem
                                key={e.id}
                                name={e.name}
                                fullName={e.full_name}
                                reposLink={e.full_name} />
                        ))}
                    </$.ListWrapper>
                </$.TabPanelWrapper>
            </$.TabsWrapper>
        ) : (<></>)}
        </>
    );
};
