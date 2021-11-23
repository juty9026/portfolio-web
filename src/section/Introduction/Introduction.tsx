import { Introduction as IntroductionType } from '@types';

type IntroductionProps = {
  data: IntroductionType;
};

const Introduction: React.FC<IntroductionProps> = ({ data }) => {
  return (
    <section>
      <pre>{data.content}</pre>
    </section>
  );
};

export default Introduction;
