import React from 'react';
import Content from './WorkDetails/Content';
import Description from './WorkDetails/Description';
import TableView from './WorkDetails/TableView';
import TechStack from './WorkDetails/TechStack';
import Title from './WorkDetails/Title';
import Wrap from './WorkDetails/Wrap';

const P10_5GX_CLOUD: React.FC = () => {
  return (
    <Wrap>
      <Title>5GX Cloud - CAP</Title>
      <Content>
        <Description>
          {`
            전에 한 번 참여했었던 CAP에 다시 참여하게 되었습니다.
          `}
        </Description>
        <TableView
          data={[
            { title: 'ROLE', list: ['Front-end Development', 'Back-end Development'] },
            {
              title: 'RESPONSIBILITIES',
              list: ['Web Application Maintenance', 'Building API', 'Shared Module Development'],
            },
          ]}
        />
        <Description>
          {`
            간단한 공지사항/FAQ/QnA 기능을 back ~ front 영역을 개발했습니다.

            차트와 데이터 테이블이 있는 화면이 5개 가량 있었고, 공통적으로 사용할 데이터 필터 컴포넌트를 작성했습니다.
            각 필터 항목이 서로 의존하고, 기능 명세가 화면별로 조금씩 다르며 여러 개발자가 사용할 컴포넌트였기 여러가지를 신경쓰며 공들여 개발했습니다.
          `}
        </Description>
        <TechStack backend={['MariaDB', 'MyBatis', 'Spring Boot']} frontend={['Vue']} />
        <Description>
          {`
            개발 후 샘플로 화면에 붙여놓은 부분을 다른 개발자가 그대로 떼어다가 사용하고, 잘못된 사용으로 인해 기능이 제대로 동작하지 않아 문의를 많이 받았습니다.
            
            컴포넌트에 대한 사용법을 다른 개발자에게 적극적으로 공유하거나 참고할 문서를 만들어 두었으면 모두가 더 편하고 효율적으로 진행할 수 있었을 텐데 하는 아쉬움이 있었습니다.

            테크 기술적인 부분으로는 언제나 배우는 점이 있고 성장하고 있다는 걸 느끼지만 개발 외적인 부분도 신경써야겠다는 생각을 하게 된 프로젝트였습니다.
          `}
        </Description>
      </Content>
    </Wrap>
  );
};

export default P10_5GX_CLOUD;
