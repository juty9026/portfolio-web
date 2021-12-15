import React from 'react';
import styled from '@emotion/styled';
import Article from '../Article';

const Wrap = styled.div`
  width: 980px;
  margin: auto;
`;

const H3 = styled.h3`
  font-size: 4rem;
`;

const H4 = styled.h4`
  font-size: 3rem;
  text-align: left;
`;

const H5 = styled.h5`
  font-size: 2rem;
`;

const ParagraphContainer = styled.div`
  padding: 10vh 5vw 10vh 5vw;
`;

const P = styled.p`
  font-size: 2rem;
  color: #6e6e73;
`;

const SubSection = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AbilitiesArticle: React.FC = () => {
  return (
    <Article title="Abilities">
      <Wrap>
        <H3>자타공인 해결사.</H3>
        <ParagraphContainer>
          <H4>Step 1:</H4>
          <P>
            어디에서 문제가 생길까요? 원인이 발생하는 포인트를 감각적으로 찾아낼 수 있습니다. 확실하게 아닌 부분을
            소거하고, 가능성이 높은 부분부터 확인해보면 답은 금방 나오게 되죠.
          </P>
        </ParagraphContainer>
        <ParagraphContainer>
          <H4>Step 2:</H4>
          <P>
            원인을 찾았으니 해결해봅시다. 잘못 구현되어 원하지 않는 결과가 나온것이라면 로직을 수정하고, 추가적인 기능이
            필요하다면 적절한 위치에 끼워 넣으면 돼요. 하지만, 아무리 급해도 사이드 이펙트가 발생할 수 있는 부분은
            꼼꼼하게 확인해야 합니다!
          </P>
        </ParagraphContainer>

        <H3>불편함 없는 커뮤니케이션.</H3>
        <ParagraphContainer>
          <H4>With 개발직군:</H4>
          <P>
            협업을 위한 소통은 필수. 기술적인 이야기를 좋아합니다. 잡담은 할 줄 모르냐구요? 너무 좋아하죠! 저랑 커피 한
            잔 어때요? ☕️
          </P>
        </ParagraphContainer>
        <ParagraphContainer>
          <H4>With 비개발직군:</H4>
          <P>
            개발직군과 비개발직군이 사용하는 용어가 다름을 잘 알고 있어요. 만약 불협화음을 내는 것이 목적이라면 내가
            알고 있는 걸 당연히 상대방도 알고 있을거라는 전제를 깔면 돼요.
            {/*<br />*/}
            {/*아, 생각난 김에 이 내용도 써두겠습니다. 기술적으로 어려운 요구사항을 받고도 쉬운 척 하지는 않겠지만, 쉬운 걸*/}
            {/*오래걸린다고 말하지도 않을거예요. 좋은 서비스를 제공하고 싶고, 사용자가 느끼기에 좋은 서비스란 UI/UX 비중이*/}
            {/*크다고 생각하기 때문에 기술적으로 어려워도 최선을 다해서 작업할게요.*/}
          </P>
        </ParagraphContainer>

        <H3>더 나은 결과물을 위해.</H3>
        <ParagraphContainer>
          <P>서비스의 품질을 </P>
        </ParagraphContainer>

        <H3>코드가 읽히는 마법.</H3>
        <ParagraphContainer>
          <P></P>
        </ParagraphContainer>
        {/*TODO: 코드 이미지*/}

        <SubSection>
          <H5>놀라운 적응력</H5>
          <H5>강한 개선 의지</H5>
          <H5>멈추지 않는 성장</H5>
        </SubSection>
      </Wrap>
    </Article>
  );
};

export default AbilitiesArticle;
