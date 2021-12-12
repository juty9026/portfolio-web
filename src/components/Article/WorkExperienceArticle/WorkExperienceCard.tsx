import Card from '@components/Card';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const styles = {
  wrapper: css`
    margin: 0.5vh 0.2vw 0.5vh 0.2vw;
    height: 10vh;
    cursor: pointer;
  `,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

interface Props {
  title: string;
  onClick: React.MouseEventHandler;
}

const WorkExperienceCard = ({ title, onClick }: Props) => {
  return (
    <Card css={styles.wrapper} onClick={onClick}>
      <Container>
        <h3>{title}</h3>
      </Container>
    </Card>
  );
};

export default WorkExperienceCard;
