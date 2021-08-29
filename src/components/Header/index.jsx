import React, { useState } from 'react';
import * as $ from './styled';
import useGithub from '../../hooks/GithubHooks';
import translation, { strings } from '../../services/translation';

const Header = () => {

    const { getUser } = useGithub();
    const [usernameToSearch, setUsernameToSearch] = useState();

    const submitGetUser = () => {
        if (!usernameToSearch) return getUser(null);
        return getUser(usernameToSearch); 
    };

    const searchHandler = ev => {
        const text = ev.target.value?.trim().replace(/\s+/g, '').toLowerCase();
        setUsernameToSearch(text);
    };

    const keydownHandler = ev => (ev.key === 'Enter' && submitGetUser());

    return (
        <$.Wrapper>
            <$.SearchBar>
                <input 
                    type="text"
                    placeholder={translation(strings.header.inputPlaceholder)}
                    onChange={searchHandler}
                    onKeyDown={keydownHandler} />
                <button 
                    type="submit"
                    onClick={submitGetUser}
                    aria-label={translation(strings.header.btnTitle)}>
                    <$.Magnifier/>
                </button>
            </$.SearchBar>
        </$.Wrapper>
    )
};

export default Header;