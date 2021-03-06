import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P06_HAPP: React.FC = () => {
  return (
    <Wrap>
      <Title title="HAPP" period="2020-06-08 ~ 2020-11-30" />
      <Content>
        <Description>
          {`
            "Happiness App"
            
            HAPP은 SKT 조직원들의 근무환경 개선과 친목도모를 목적으로 하는 커뮤니티 앱입니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['프론트엔드 개발'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['앱 개발자와 협업', '모바일 웹, 에디터 개발', '모바일 사파리 이슈 픽스'],
            },
          ]}
        />
        <Description>
          {`
            React Native를 사용하여 앱 개발자와 네이티브 앱의 몇 가지 화면을 함께 개발했고, 웹뷰에 보여지는 화면 개발 및 디버깅(주로 모바일 사파리)을 전담했습니다.
            모바일 에디터도 개발했는데, 끊임없는 테스팅과 수정을 반복하여 Android / iOS 사용자가 유사한 경험을 할 수 있도록 개발하였습니다.

            개발 중 크롬에서 특정 화면의 댓글이 500여개가 되면 TTV는 2초 미만, TTI가 90초 이상 소요되는 현상이 발견되었습니다.
            프로파일링을 해보니 Layout/Reflow 구간에서 엄청난 시간을 잡아먹고 있었고, CSS를 수정하여 TTI를 TTV와 비슷한 수준으로 개선할 수 있었습니다.
          `}
        </Description>
        <TechStack backend={['JSP']} frontend={['React Native', 'jQuery']} />
        <Description>
          {`
            문제를 해결하는 과정에서 브라우저가 화면을 그리기까지의 단계를 다시 한 번 생각해보고, 스크립트 성능뿐만 아니라 DOM 구조 및 스타일에서 오는 퍼포먼스 이슈도 신경써야겠다고 생각한 계기가 되었습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P06_HAPP;
