import { AbilityData } from '@types';
import Article from '../Article';

interface Props {
  data: AbilityData[];
}

const AbilitiesArticle: React.FC<Props> = ({ data }) => {
  return (
    <Article title="Abilities">
      {data.map((ability) => (
        <section key={ability.subject}>
          <h2>{ability.subject}</h2>
          <pre>{ability.content}</pre>
        </section>
      ))}
    </Article>
  );
};

export default AbilitiesArticle;
