import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P12_JUVIS: React.FC = () => {
  return (
    <Wrap>
      <Title title="CRM" period="2021-10-13 ~ 현재" />
      <Content>
        <Description>
          {`
            현재 참여중인 CRM은 JUVIS의 통합 관리 콘솔입니다.
            지점별, 푸드, 몰, HR, 관리자 등 다양한 업무를 관리합니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['프론트엔드 개발', '백엔드 개발', '데브옵스'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['웹 개발'],
            },
          ]}
        />
        <Description>
          {`
            신규 화면 개발을 진행하며 동시에 코드 리팩토링 및 JPA + QueryDSL 을 점진적으로 적용하고 있습니다.
            뒤얽혀있는 코드를 정리하고 테스트코드를 작성하며 방대한 레거시를 조금씩 걷어내는 중입니다.
          `}
        </Description>
        <TechStack backend={['MySQL', 'MyBatis', 'Spring']} frontend={['AngularJS']} devops={['Jenkins', 'Linux']} />
        <Description>
          {`
            파편화되어 여기저기 흩어져 있는 코드와 사용하지 않는 코드들을 보며, 유지보수성과 확장성을 높이기 위한 클린코드와 리팩토링이 얼마나 중요한지를 다시 한 번 느끼고 있습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P12_JUVIS;
