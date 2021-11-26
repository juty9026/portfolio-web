import { IntroductionData } from '@types';
import Article from '../Article';

interface Props {
  data: IntroductionData;
}

const IntroductionArticle: React.FC<Props> = ({ data }) => {
  return (
    <Article title="Introduction">
      <section>
        <pre>{data.content}</pre>
      </section>
    </Article>
  );
};

export default IntroductionArticle;
