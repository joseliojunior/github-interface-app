import React from 'react';
import Title from '../Title';
import Header from '../Header';
import * as $ from './styled';

export const Layout = ({ children }) =>
<$.LayoutWrapper>
    <Title/>
    <Header/>
    {children}
</$.LayoutWrapper>;