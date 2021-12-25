import React from 'react';
import styled from '@emotion/styled';
import {
  SectionCleanCode,
  SectionCommunication,
  SectionProblemSolver,
  SectionWorkEfficiency,
} from '@components/Article/AbilitiesArticle/section';

const Wrap = styled.div`
  width: 100%;
  margin: auto;
`;

const H3 = styled.h3`
  font-size: 4rem;
`;

const H5 = styled.h5`
  font-size: 2rem;
`;

const SubSection = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AbilitiesArticle: React.FC = () => {
  return (
    <article>
      <Wrap>
        <SectionCommunication />
        <SectionProblemSolver />
        <SectionCleanCode />
        <SectionWorkEfficiency />

        <SubSection>
          <H5>놀라운 적응력</H5>
          <H5>강한 개선 의지</H5>
          <H5>멈추지 않는 성장</H5>
        </SubSection>
      </Wrap>
    </article>
  );
};

export default AbilitiesArticle;
