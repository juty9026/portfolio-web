import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P04_IDCUBE: React.FC = () => {
  return (
    <Wrap>
      <Title title="IDCube" period="2019-07-22 ~ 2020-04-17" />
      <Content>
        <Description>
          {`
            SKT의 통신 인프라 분석 플랫폼, IDCube 입니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['백엔드 개발', '프론트엔드 개발'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['쿼리 최적화', '웹 성능 최적화', '데이터 시각화'],
            },
          ]}
        />
        <Description>
          {`
            주 업무는 드루이드 서버에 적절하게 질의하고, 받아온 데이터를 시각화하여 웹에 보여주는 것이었습니다.
            대상 데이터셋이 방대하여 쿼리에 따른 응답시간 편차가 심해 성능 개선을 위해 지속적으로 쿼리 튜닝을 했습니다.
            기존에는 화면에서 호출하는 모든 api가 완료 될 때까지 로딩 화면을 보여주고 사용자의 인터랙션을 차단하였으나 한 화면에 보여지는 차트들이 하나 둘 늘어나면서 로딩이 길어져 사용자 경험을 해치는 문제가 발생했습니다.
            UX를 개선하기 위해 차트 각각에 개별 로딩을 적용하였고, 로딩 중 라우트 전환 시 api 요청을 취소하기 위해 공통 래퍼도 수정했습니다.
          `}
        </Description>
        <TechStack backend={['Druid', 'MariaDB', 'JPA', 'QueryDSL', 'Spring Boot']} frontend={['Angular2']} />
        <Description>
          {`
            버그를 만들지 않기 위해 업무 도메인, 업무 흐름, 백엔드, 프론트엔드 모두 깊게 파고들다 보니 지식이 정말 많이 늘었습니다.
            개발자로서 가야 할 길이 한참 멀었다는 것을 느끼게 해주었고, 한편으로는 크게 성장할 수 있었던 프로젝트입니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P04_IDCUBE;
