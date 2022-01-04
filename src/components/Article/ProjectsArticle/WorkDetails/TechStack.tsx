import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  display: flex;
  margin: 5vh 0 5vh 0;
  padding: 5vh 5vw 5vh 5vw;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
`;

const Title = styled.em`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  color: white;

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.span`
  flex: 1;
  text-align: left;
  font-size: 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

interface Props {
  backend?: string[];
  frontend?: string[];
  devops?: string[];
}

const TechStack: React.FC<Props> = ({ backend = [], frontend = [], devops = [] }) => {
  return (
    <Wrap>
      <TitleContainer>
        <Title>Skills</Title>
      </TitleContainer>
      <ContentContainer>
        {!!backend.length && <Content>{backend.join(', ')}</Content>}
        {!!frontend.length && <Content>{frontend.join(', ')}</Content>}
        {!!devops.length && <Content>{devops.join(', ')}</Content>}
      </ContentContainer>
    </Wrap>
  );
};

export default TechStack;
