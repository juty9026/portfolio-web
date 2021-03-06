import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P09_WDP: React.FC = () => {
  return (
    <Wrap>
      <Title title="WDP" period="2021-04-03 ~ 2021-04-30" />
      <Content>
        <Description>
          {`
            다시 한 번, SKT의 WDP입니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['프론트엔드 개발'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['모바일 웹 개발', '비디오 플레이어 컴포넌트 개발', '클래스 컴포넌트를 함수 컴포넌트로 변경'],
            },
          ]}
        />
        <Description>
          {`
            디자인을 적용한 탐색바와, 영상의 총 길이와 실제 재생 시간을 이용해 몇 가지 기능이 추가된 비디오 플레이어 컴포넌트를 개발했습니다.
            키보드가 show/dismiss 될 때 웹뷰의 높이가 부자연스럽게 변경되는 문제를 발견하고 고친 경험이 있습니다.
          `}
        </Description>
        <TechStack frontend={['React', 'React Native']} />
        <Description>
          {`
            이외의 시간에는 틈틈이 성능 개선작업 및 리팩토링을 하며 기술부채를 상환했습니다.
            모든 컴포넌트들이 클래스 방식으로 작성되어있었고, 먼저 작업하고있던 개발팀이 함수 방식으로 전환하려는 계획을 가지고 있었으므로 동참하게 되었습니다.
            중복되는 로직이 존재하는 클래스 컴포넌트를 하나씩 함수 컴포넌트로 전환하고 추출해 낸 로직을 훅으로 만들었습니다.
            없던 버그를 만들어 내는 등 리스크가 있음을 충분히 인지하고 있어 신중을 기해 작업하였고 성공적으로 함수 컴포넌트로 전환할 수 있었습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P09_WDP;
