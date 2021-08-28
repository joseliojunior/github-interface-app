import React, { useState } from 'react';
import * as $ from './styled';
import useGithub from '../../hooks/GithubHooks';
import translation, { strings } from '../../services/translation';

const Header = () => {

    const { getUser } = useGithub();
    const [usernameToSearch, setUsernameToSearch] = useState();

    const submitGetUser = () => {
        if (!usernameToSearch) return;
        return getUser(usernameToSearch); 
    };

    const keydownHandler = ev => (ev.key === 'Enter' && submitGetUser());

    return (
        <$.Wrapper>
            <$.SearchBar>
                <input 
                    type="text"
                    placeholder={translation(strings.header.inputPlaceholder)}
                    onChange={(event) => setUsernameToSearch(event.target.value)}
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