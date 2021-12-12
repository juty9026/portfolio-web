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
      <Title>JUVIS - CRM</Title>
      <Content>
        <Description>
          {`
            현재 참여중인 프로젝트인 CRM은 JUVIS의 통합 관리 콘솔입니다.
            지점별, 푸드, 몰, HR, 관리자 등 다양한 업무를 관리합니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['Front-end Development', 'Back-end Development', 'DevOps'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['Web Application Maintenance'],
            },
          ]}
        />
        <Description>
          {`
            현재는 분리되어있는 결제 시스템을 곧 통합 시스템으로 전환할 예정이고, 그 일원으로서 합류하게 되었습니다.
            아직 본격적으로 시작하지는 않았지만 간단한 기능추가 몇 가지를 맡아서 하며 시스템에 적응중입니다.

            더 나은 환경을 위해 개발팀과 이야기를 한 번 해보려 하는데 잘 될지 모르겠네요. 😅
            우선은 시간이 나는대로 로컬에서 테스트코드를 작성중이고, 도입하고 싶은 기술 및 문화와 왜 하고싶은지에 대해 내용을 정리하고 있습니다.
          `}
        </Description>
        <TechStack backend={['MySQL', 'MyBatis', 'Spring']} frontend={['AngularJS']} devops={['Jenkins', 'Linux']} />
        <Description>
          {`
            현재 5년차로 시니어에 가까운 백엔드 개발자분이 계십니다.
            추구하는 개발자의 상이 비슷해 대화를 하며 배우는 부분이 많고 서로에게 긍정적인 효과를 주고 있는 것 같아요.
            시간이 흐른 뒤에 둘 다 이상에 가까워진 모습이었으면 좋겠습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P12_JUVIS;
