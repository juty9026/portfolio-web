import React, { CSSProperties, useMemo } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import Card from '@components/Card';
import PartnerType from '@customTypes/Partner';
import { DevIcon, DevIconName } from '@components/DevIcon';

const colors: Record<PartnerType, CSSProperties> = {
  Openit: { background: 'linear-gradient(45deg, dodgerblue, seagreen)' },
  SKCC: { background: 'linear-gradient(45deg, #f4741c, #e42c3c, #f4741c)' },
  HotelShilla: { background: 'linear-gradient(45deg, #3c443c, #3c443c' },
  JUVIS: { background: 'linear-gradient(45deg, #ea7492, #ea7492)' },
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

const CardHeader = styled.header`
  flex: 1 0 25%;
  padding: 2% 0;
`;

const CardBody = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 5%;
  text-align: left;
`;

const IconContainer = styled.div`
  flex: 0 1 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const Partner = styled.h4`
  font-size: 1.2rem;
  flex: 1;
  color: white;
`;

const Title = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Period = styled.span`
  display: block;
  font-size: 1rem;
  flex: 1;
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
      <CardHeader style={colors[partner]}>
        <Partner>{partnerNames[partner]}</Partner>
      </CardHeader>
      <CardBody>
        <TextContainer>
          <Title>{title}</Title>
          <Period>
            {periodText}
            <br />({durationText})
          </Period>
        </TextContainer>
        <IconContainer>
          {iconNames?.map((iconName) => (
            <StyledDevIcon name={iconName} />
          ))}
        </IconContainer>
      </CardBody>
    </StyledCard>
  );
};

export default ProjectCard;
