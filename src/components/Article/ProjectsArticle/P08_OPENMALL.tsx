import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P08_OPENMALL: React.FC = () => {
  return (
    <Wrap>
      <Title title="오픈몰" period="2021-02-01 ~ 2021-04-02" />
      <Content>
        <Description>
          {`
            오픈잇의 쇼핑몰, 오픈몰 입니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['프론트엔드 개발 리드 👑'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['리액트 프로젝트 셋업', '프로젝트 구조 설계'],
            },
          ]}
        />
        <Description>
          {`
            개발 문화를 개선시켜보고자 도전적으로 일하는 방식을 변경해보았습니다.
            매일 아침 30분 가량 진행상황 및 이슈를 공유하고, 개인의 일정에 맞춰 업무를 배분했습니다.
            깃플로우, PR도 도입해보고 싶었으나 깃 전략만 살짝 바꾸어 진행했습니다.
            개인적으로 좋은 경험을 가지고 있었던 ESLint, Prettier를 팀원분들에게 추천했고, 긍정적인 반응을 얻어 도입을 결정했습니다.
            각자의 개발 환경에 따라 누락될 수 있는 부분이기 때문에 git pre-commit hook을 통해 lint fix 혹은 prettier write를 실패하는 경우 커밋이 올라가지 않도록 설정했습니다.
          `}
        </Description>
        <TechStack frontend={['React']} />
        <Description>
          {`
            도전해보고 싶은 내용들이 더 많았으나 저를 포함한 팀원의 '익숙하지 않음'에서 오는 업무 퍼포먼스 감소, 러닝커브를 고려해 적당히 덜어내었습니다.
            덜어냈다고는 하지만 기존에 일하던 방식과는 너무나도 많은 부분이 변경되었기 때문에 걱정스러운 부분도 있었으나, 다행히 모든 팀원분들이 성실하게 노력해주었고 으쌰으쌰 하는 분위기로 별 문제 없이 배포까지 완료할 수 있었습니다.
            
            일정을 조정하고 일을 가져가는 방식은 더 자유로워졌으나 각자가 맡은 부분에 대해 책임감을 더 갖게 되는 신기한 경험이었습니다.
            feature 브랜치를 나눠서 관리해보니 히스토리 그래프가 눈에 더 잘 들어오고, 머지나 롤백도 더 수월해졌습니다.
            ESLint, Prettier, pre-commit hook 도입으로 소스가 눈에띄게 깔끔한 상태를 유지했습니다.
            
            좋은 개발 문화가 왜 '좋은'인지, 그에 따른 결과물의 품질이 이렇게나 차이가 난다는 것을 몸소 경험할 수 있었습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P08_OPENMALL;
