import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P11_OPENMALL: React.FC = () => {
  return (
    <Wrap>
      <Title title="오픈몰" period="2021-10-13 ~ 2021-10-29" />
      <Content>
        <Description>
          {`
            또, 또, 다시 Openmall 입니다.
            1차 개발을 끝내고 방치되었던 녀석을 다시 만나게 되었습니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['Front-end Development', 'Back-end Development'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['Mobile Web Maintenance', 'Applying Changed Policy (Payment & Delivery)'],
            },
          ]}
        />
        <Description>
          {`
            몇 가지 추가 요구사항 및 정책 변경에 따른 수정을 하기 위해 개발직군 중 단독으로 투입되어 진행했습니다.

            결제 및 배송 정책이 변경되어 서비스 로직 변경이 필요한 상황이었습니다.
            Back-end 개발에 참여하지 않았고 당시 개발자분들에게도 문의할 수 있는 상황이 아니어서 소스를 차근차근 뜯어보고 로직을 파악해야 했습니다.
          `}
        </Description>
        <TechStack backend={['MariaDB', 'MyBatis', 'Spring Boot']} frontend={['React']} />
        <Description>
          {`
            처음에는 걱정스러운 부분이 많았지만 계속 보다보니 데이터의 흐름이 눈에 들어오기 시작했고 코드 품질을 개선할 수 있는 포인트도 몇 가지가 보였습니다.
            다행히 메인 업무와 추가로 봐두었던 품질 개선 작업도 잘 마무리 할 수 있었습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P11_OPENMALL;
