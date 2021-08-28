import React from 'react';
import { Layout, Profile, Repositories, NoSearch } from './components';
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
            </>) : (<NoSearch />)}
        </Layout>
    )
};

export default App;