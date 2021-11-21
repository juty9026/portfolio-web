import { Introduction as IntroductionType } from '@types';

type IntroductionProps = {
  data: IntroductionType;
};

const Introduction: React.FC<IntroductionProps> = ({ data }) => {
  return (
    <div>
      <pre>{data.content}</pre>
    </div>
  );
};

export default Introduction;
