import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import moment from 'moment';
import Card from '@components/Card';

const styles = {
  wrapper: css`
    margin: 0.5vh 0.2vw 0.5vh 0.2vw;
    height: 10vh;
    cursor: pointer;
  `,
};

const Header = styled.header`
  flex: 1 0 25%;
`;

const Partner = styled.h4`
  flex: 1;
`;

const Container = styled.div`
  flex: 1 0 50%;
`;

const Title = styled.h3`
  font-size: 2rem;
  text-align: center;
`;

const Footer = styled.div`
  flex: 1 0 25%;
`;

const Period = styled.h5`
  flex: 1;
`;

interface Props {
  partner?: string;
  title: string;
  period: { start: string; end?: string };
  onClick: React.MouseEventHandler;
}

const WorkExperienceCard: React.FC<Props> = ({ partner, title, period, onClick }) => {
  const periodText = useMemo(() => {
    const { start, end } = period;
    const duration = moment.duration(moment(end).diff(moment(start))).humanize();
    return `${start} ~ ${end || '현재'} (${duration})`;
  }, [period]);

  return (
    <Card css={styles.wrapper} onClick={onClick}>
      <Header>
        <Partner>{partner}</Partner>
      </Header>
      <Container>
        <Title>{title}</Title>
      </Container>
      <Footer>
        <Period>{periodText}</Period>
      </Footer>
    </Card>
  );
};

export default WorkExperienceCard;
