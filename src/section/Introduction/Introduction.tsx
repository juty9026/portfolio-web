import { IntroductionData } from '@types';

type IntroductionProps = {
  data: IntroductionData;
};

const Introduction: React.FC<IntroductionProps> = ({ data }) => {
  return (
    <section>
      <pre>{data.content}</pre>
    </section>
  );
};

export default Introduction;
