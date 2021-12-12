import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P07_5GX_CLOUD: React.FC = () => {
  return (
    <Wrap>
      <Title>5GX Cloud - CAP</Title>
      <Content>
        <Description>
          {`
            SKT의 Cloud 사업 중 하나인 CAP 프로젝트에 참여했습니다.
            클라우드 상품관리, 계약관리, 청구작업 및 통계를 제공하는 프로젝트입니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['Front-end Development', 'Back-end Development'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['Data Visualization', 'Shared Module Development'],
            },
          ]}
        />
        <Description>
          {`
            d3.js를 활용하여 Donut Chart, Line&Area Chart 컴포넌트를 작성했습니다.
            d3와 Vue 모두 DOM을 직접 조작하려고 하기 때문에 충돌을 피하고 유지보수를 용이하게 만들기 위해 책임을 적절하게 분리했습니다.
          `}
        </Description>
        <TechStack backend={['MariaDB', 'MyBatis', 'Spring Boot']} frontend={['Vue']} />
        <Description>
          {`
            개발 진행 중 권한체크를 통해 버튼을 숨기거나 노출시키는 기능이 필요하게 되었습니다.
            custom directive를 통해 버튼이 보이기 위해 필요한 role을 선언하여 사용할 수 있도록 구현하니 기존에 작성된 vue template 수정도 빠르게 끝낼 수 있었고 신규 화면에 대해서도 쉽게 적용할 수 있었습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P07_5GX_CLOUD;
