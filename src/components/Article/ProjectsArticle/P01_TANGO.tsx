import React from 'react';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Description from './WorkDetails/Description';
import Content from './WorkDetails/Content';
import Wrap from './WorkDetails/Wrap';

const P01_TANGO: React.FC = () => {
  return (
    <Wrap>
      <Title title="TANGO" period="2018-02-01 ~ 2018-05-31" />
      <Content>
        <Description>
          {`
            첫 번째로 경험한 프로젝트입니다! 🎉

            TANGO는 SKT가 개발한 AI 네트워크 관리 시스템입니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['백엔드 개발', '데이터 운영'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['백오피스 개발', 'Data 수집 프로그램 개발', 'Data 모니터링 및 재처리'],
            },
          ]}
        />
        <Description>
          {`
            다양한 소스로부터 데이터를 수집하기 위한 자바 애플리케이션을 주로 개발하였고, 각 데이터의 수집 상태 모니터링 및 재처리를 위한 백오피스 웹을 개발했습니다.
          `}
        </Description>
        <TechStack backend={['Hadoop', 'Hive', 'ActiveMQ', 'Spring', 'JSP']} />
        <Description>
          {`
            첫 번째 프로젝트인만큼 얻은 부분이 많았습니다.
            개인적으로 진행할 때와는 다르게 신경써야 할 사항들이 몇몇 있었죠.

            메모리와 스레딩, 쿼리 수행 시간 및 성능을 고려해야 했고 특히나 팀의 일원으로서 협업하는 방법을 알게 되어 아무것도 몰랐던 제가 크게 성장할 수 있었던 원동력이 되었습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P01_TANGO;
