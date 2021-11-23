import { AbilityData } from '@types';

type AbilitiesProps = {
  data: AbilityData[];
};

const Abilities: React.FC<AbilitiesProps> = ({ data }) => {
  return (
    <>
      {data.map((ability) => (
        <section key={ability.subject}>
          <h2>{ability.subject}</h2>
          <pre>{ability.content}</pre>
        </section>
      ))}
    </>
  );
};

export default Abilities;
