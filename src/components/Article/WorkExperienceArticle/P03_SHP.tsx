import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P03_SHP: React.FC = () => {
  return (
    <Wrap>
      <Title>SHP</Title>
      <Content>
        <Description>
          {`
            SHP는 호텔신라와 삼성 웰스토리가 공동으로 개발한 건강관리 앱입니다.
            운동과 식음기록을 관리하고 채팅 형태의 상담원 문의 기능 등이 있습니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['Back-end Development', 'Front-end Development'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['Mobile Web Maintenance', 'Query Optimization', 'Communicating with App Developer'],
            },
          ]}
        />
        <Description>
          {`
            네이티브 앱 내 웹뷰에 보여지는 모바일 웹을 개발했습니다.
            JSP로 구현된 웹이었지만 모바일 사용자에게 더 나은 경험과 미려한 UI를 제공하기 위해 많은 고민을 했습니다.
            마치 SPA인 양 애니메이션을 곁들인 DOM 조작을 자주 사용했었는데, 버그를 만들지 않기 위해 정성스럽게 코드를 짰던 기억이 있습니다.
          `}
        </Description>
        <TechStack backend={['Oracle', 'MyBatis', 'Spring', 'JSP']} frontend={['jQuery']} />
        <Description>
          {`
            Android / iOS 개발자와 함께 사용자와 맞닿아 있는 앱을 개발하는 경험은 처음이었던지라 다소 낯설었지만 한편으로는 성취감을 느끼고, 그로 인해 흥미도 생겼습니다.
            Front-end 개발을 더 심도있게 해보고 싶다는 생각이 든 건 아마도 이때부터였던 것 같아요.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P03_SHP;
