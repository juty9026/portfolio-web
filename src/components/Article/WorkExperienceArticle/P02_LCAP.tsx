import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P02_LCAP: React.FC = () => {
  return (
    <Wrap>
      <Title>LCAP</Title>
      <Content>
        <Description>
          {`
            LCAP은 SKT의 비정상 사용자 감지 프로젝트입니다.
            첫 번째 프로젝트였던 TANGO-D와 유사하게, Data 관련 업무가 주 업무입니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['Back-end Development', 'Data Operation'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['Data Collecting Module Development', 'Back Office Development', 'Data Monitoring & Reprocessing'],
            },
          ]}
        />
        <Description>
          {`
            모니터링 & 운영 업무를 중점적으로 진행하다보니 반복되는 작업이 많아 개선해야 할 포인트가 눈에 들어왔고, 쉘 스크립트와 자바 어플리케이션을 사용해 업무 자동화를 위한 프로그램을 만들었습니다.
          `}
        </Description>
        <TechStack backend={['Hadoop', 'Hive', 'Spring', 'JSP', 'Shell Scripting']} />
        <Description>
          {`
            자동화를 하고 나니 업무에 할당하는 시간을 대폭 줄이는 것 외에도 휴먼 에러를 방지하는 효과도 있어 업무 효율이 크게 올랐습니다.
            
            직접 업무를 개선해보고 그 결과가 좋았던 소중한 기억으로 남아있는 프로젝트 중 하나입니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P02_LCAP;
