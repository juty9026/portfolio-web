import { Ability as AbilityType } from '@types';

type AbilitiesProps = {
  data: AbilityType[];
};

const Abilities: React.FC<AbilitiesProps> = ({ data }) => {
  return (
    <div>
      {data.map((ability) => (
        <div key={ability.subject}>
          <h1>{ability.subject}</h1>
          <p>{ability.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Abilities;
