import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P05_WDP: React.FC = () => {
  return (
    <Wrap>
      <Title title="WDP" period="2020-04-20 ~ 2020-05-29" />
      <Content>
        <Description>
          {`
            "Wellness Data Platform"
            
            SKT의 건강 관리 앱, WDP 입니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['Front-end Development'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['모바일 웹 개발', '컴포넌트 구조 재설계 및 리팩토링', 'NPM 패키지 패치'],
            },
          ]}
        />
        <Description>
          {`
            유지보수가 용이하고 읽기 편한 컴포넌트 구조를 설계하고 중복되는 로직을 추출해 HOC를 작성했습니다.
            또한, 요구사항을 구현하기 위해 NPM 패키지를 직접 패치하였습니다.
          `}
        </Description>
        <TechStack frontend={['React']} />
        <Description>
          {`
            프로젝트에 종속적인 기능이었기 때문에 깃허브에 PR을 올리지는 않았지만, 오픈소스를 수정하여 필요한 기능을 추가해 본 것은 값진 경험이었고 프로젝트 구조를 설계함에 있어 베스트 프랙티스를 찾기 위한 노력이 리액트를 조금 더 이해하게 된 밑거름이 되었습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P05_WDP;
