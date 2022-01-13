import styled from '@emotion/styled';

export const Container = styled.div`
  margin: auto;
  min-height: 100vh;
  padding: 5%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 10rem;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    gap: 2rem;
  }
`;

export const SectionPhoto = styled.section`
  @media (min-width: 1024px) {
    flex: 1 0 60%;
  }
`;

export const SectionIntroduction = styled.section`
  @media (min-width: 1024px) {
    flex: 0 0 40%;
    font-size: 1rem;
  }
`;

export const Headline = styled.h1`
  font-size: 2rem;
  text-align: left;

  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }
`;

export const Introduce = styled.p`
  font-size: 1rem;
`;

export const ContactContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmailContainer = styled.div`
  flex: 1;
`;

export const Email = styled.span`
  top: 50%;
  display: block;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 1.5rem;
  font-weight: normal;
  transform: translateY(-50%);
`;

export const IconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
