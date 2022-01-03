import React from 'react';
import styled from '@emotion/styled';
import Period from '@components/Article/ProjectsArticle/WorkDetails/Period';

const Wrap = styled.div`
  height: 60vh;
  margin-bottom: 5vh;
  color: white;
`;

const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const TitleText = styled.h3`
  letter-spacing: 0.1em;

  @media (max-width: 767px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 6rem;
  }
  @media (min-width: 1024px) {
    font-size: 9rem;
  }
`;

interface TitleProps {
  title?: string;
  period?: string;
}
const Title: React.FC<TitleProps> = ({ title, period }) => {
  return (
    <Wrap>
      <Container>
        <TitleText>{title}</TitleText>
        <Period>{period}</Period>
      </Container>
    </Wrap>
  );
};

export default Title;
