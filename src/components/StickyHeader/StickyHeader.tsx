/** @jsxImportSource @emotion/react */
import React from 'react';
import { sticky } from './StickyHeader.e';

const StickyHeader: React.FC = ({ children }) => <header css={sticky}>{children}</header>;

export default StickyHeader;
