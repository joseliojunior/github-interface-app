import React from 'react';
import { Repository } from './styled';

export const RepositoryItem = ({ name, fullName, reposLink }) =>
<Repository>
    <h2>{name}</h2>
        <a href={`https://github.com/${reposLink}`} target="_blank" rel="noreferrer">{fullName}</a>
</Repository>;