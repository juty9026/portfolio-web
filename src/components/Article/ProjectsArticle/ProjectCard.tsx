import React, { CSSProperties, useMemo } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import Card from '@components/Card';
import PartnerType from '@customTypes/Partner';
import { DevIcon, DevIconName } from '@components/DevIcon';

const colors: Record<PartnerType, CSSProperties> = {
  Openit: { background: 'linear-gradient(45deg, white, dodgerblue, seagreen, white)' },
  SKCC: { background: 'linear-gradient(45deg, white, #f4741c, #e42c3c, #f4741c, white)' },
  HotelShilla: { background: 'linear-gradient(45deg, white, #3c443c, white' },
  JUVIS: { background: 'linear-gradient(45deg, white, #ea7492, white)' },
};

const partnerNames: Record<PartnerType, string> = {
  Openit: '오픈잇',
  SKCC: 'SK C&C',
  HotelShilla: '호텔신라',
  JUVIS: 'JUVIS',
};

const StyledCard = styled(Card)<{ active?: boolean }>`
  margin: 0.5vh 0.2vw 0.5vh 0.2vw;
  cursor: pointer;
  background-color: white;
`;

const Header = styled.header`
  flex: 1 0 25%;
  padding: 2% 0;
`;

const Container = styled.div`
  flex: 1 0 50%;
  padding: 2% 0;
`;

const Footer = styled.div`
  flex: 1 0 25%;
  padding: 2% 0;
`;

const Partner = styled.h4`
  flex: 1;
  color: white;
`;

const Title = styled.h3`
  font-size: 2rem;
  text-align: center;
`;

const Period = styled.h5`
  flex: 1;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledDevIcon = styled(DevIcon)`
  flex: 0;
`;

interface WorkExperienceCardProps {
  active?: boolean;
  partner: PartnerType;
  title: string;
  period: { start: string; end?: string };
  iconNames?: DevIconName[];
  onClick: React.MouseEventHandler;
}
const ProjectCard: React.FC<WorkExperienceCardProps> = ({
  active = false,
  partner,
  title,
  period,
  iconNames,
  onClick,
}) => {
  const periodText = useMemo(() => {
    const { start, end } = period;
    return `${start} ~ ${end || '현재'}`;
  }, [period]);

  const durationText = useMemo(() => {
    const { start, end } = period;
    return moment.duration(moment(end).diff(moment(start))).humanize();
  }, [period]);

  return (
    <StyledCard active={active} onClick={onClick}>
      <Header style={colors[partner]}>
        <Partner>{partnerNames[partner]}</Partner>
      </Header>
      <Container>
        <Title>{title}</Title>
      </Container>
      <Period>
        {periodText}
        <br />({durationText})
      </Period>
      <Footer>
        <IconContainer>
          {iconNames?.map((iconName) => (
            <StyledDevIcon name={iconName} />
          ))}
        </IconContainer>
      </Footer>
    </StyledCard>
  );
};

export default ProjectCard;
