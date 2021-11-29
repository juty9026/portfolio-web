import { AbilityData } from '@types';
import Article from '../Article';

interface Props {
  data: AbilityData[];
}

const AbilitiesArticle: React.FC<Props> = ({ data }) => {
  return (
    <Article title="Abilities">
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {data.map((ability) => (
            <section
              key={ability.subject}
              style={{
                flex: '1 0 20%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s',
                margin: '4vh 4vw 4vh 4vw',
                zIndex: 1,
              }}
            >
              <h2>{ability.subject}</h2>
              <pre>{ability.content}</pre>
            </section>
          ))}
        </div>
        <div
          style={{
            width: '100vw',
            height: 'calc(100% - 4vh)',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: '4vh',
            color: '#0066ff',
          }}
        >
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#해결사</span>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#커뮤니케이션</span>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#열정</span>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#노력</span>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#일잘러</span>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#취미는 공부</span>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#INTP</span>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#성실</span>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#배우는 습관</span>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#고양이 집사</span>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#Nerd</span>
            <span style={{ flex: 1, textShadow: '-2px -2px 1px #dddddd' }}>#적응왕</span>
          </div>
        </div>
      </div>
    </Article>
  );
};

export default AbilitiesArticle;
