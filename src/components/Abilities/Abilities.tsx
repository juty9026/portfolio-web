import { Ability as AbilityType } from '@types';

type AbilitiesProps = {
  data: AbilityType[];
};

const Abilities: React.FC<AbilitiesProps> = ({ data }) => {
  return (
    <div>
      {data.map((ability) => (
        <div key={ability.subject}>
          <h2>{ability.subject}</h2>
          <pre>{ability.content}</pre>
        </div>
      ))}
    </div>
  );
};

export default Abilities;
