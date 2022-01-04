import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  display: flex;
  margin: 5vh 0 5vh 0;
  padding: 5vh 5vw 5vh 5vw;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.em`
  text-align: center;
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

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  text-align: center;
  color: white;

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
  data: {
    title: string;
    list: string[];
  }[];
}

const TableView: React.FC<Props> = ({ data }) => {
  return (
    <Wrap>
      {data.map((item) => (
        <TitleContainer key={item.title}>
          <Title>{item.title}</Title>
          <TextContainer>
            {item.list.map((listItem) => (
              <Text key={listItem}>{listItem}</Text>
            ))}
          </TextContainer>
        </TitleContainer>
      ))}
    </Wrap>
  );
};

export default TableView;
