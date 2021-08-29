import React from 'react';
import { Layout, Profile, Repositories, NoSearch, InvalidSearch } from './components';
import useGithub from './hooks/GithubHooks';

const App = () => {
    const { githubState } = useGithub();

    return (
        <Layout>
            {githubState.hasUser ? (
            <>
                {githubState.loading ? (
                    <p>Loading...</p>
                ) : (
                <>
                    <Profile/>
                    <Repositories/>
                </>)}
            </>) : githubState.isValidUser ? (
                <NoSearch />
                ) : (
                <InvalidSearch/>
            )
            }
        </Layout>
    )
};

export default App;