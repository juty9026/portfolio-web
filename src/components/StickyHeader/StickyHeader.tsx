/** @jsxImportSource @emotion/react */
import React from 'react';
import { sticky } from './StickyHeader.emotion';

const StickyHeader: React.FC = ({ children }) => <div css={sticky}>{children}</div>;

export default StickyHeader;
