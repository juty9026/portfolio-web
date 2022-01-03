import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P08_OPENMALL: React.FC = () => {
  return (
    <Wrap>
      <Title title="오픈몰" period="2021-02-01 ~ 2021-04-02" />
      <Content>
        <Description>
          {`
            오픈잇의 쇼핑몰, Openmall 입니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['👑 Lead Front-end Development'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['React Project Setup', 'Project Structuring'],
            },
          ]}
        />
        <Description>
          {`
            개인적으로 좋은 경험을 가지고 있었던 ESLint와 Prettier를 팀원분들에게 추천했고, 긍정적인 반응을 얻어 도입을 결정했습니다.
            각자의 개발 환경에 따라 누락될 수 있는 부분이기 때문에 git pre-commit hook을 통해 lint fix 혹은 prettier write를 실패하는 경우 커밋이 올라가지 않도록 설정했습니다.
            매일 아침 30분 가량 진행상황 및 이슈 공유, 잔여 업무를 배분하기 위한 데일리를 진행했습니다.
          `}
        </Description>
        <TechStack frontend={['React']} />
        <Description>
          {`
            도전해보고 싶은 내용들이 더 많았으나 저를 포함한 팀원의 '익숙하지 않음'에서 오는 업무 퍼포먼스 감소, 러닝커브를 고려해 적당히 덜어내었습니다.
            걱정스러운 부분도 있었으나 모두가 서로에게 격려받아 무탈하게 종료할 수 있었습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P08_OPENMALL;
