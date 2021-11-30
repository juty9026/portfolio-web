/** @jsxImportSource @emotion/react */
import { AbilityData } from '@types';
import Article from '../Article';
import styles from './AbilitiesArticle.e';

interface Props {
  data: AbilityData[];
}

const AbilitiesArticle: React.FC<Props> = ({ data }) => {
  return (
    <Article title="Abilities">
      <div>
        <div css={styles.cardContainer}>
          {data.map((ability) => (
            <section key={ability.subject} css={styles.card}>
              <h2 css={styles.cardSubject}>{ability.subject}</h2>
              <div css={styles.spacer} />
              <pre>{ability.content}</pre>
            </section>
          ))}
        </div>
        <div css={styles.parallaxContainer}>
          <div css={styles.parallaxRow}>
            <span css={styles.parallaxSpan}>#해결사</span>
            <span css={styles.parallaxSpan}>#커뮤니케이션</span>
            <span css={styles.parallaxSpan}>#취미는공부</span>
            <span css={styles.parallaxSpan}>#노력</span>
            <span css={styles.parallaxSpan}>#고양이집사</span>
          </div>
          <div css={styles.parallaxRow}>
            <span css={styles.parallaxSpan}>#열정</span>
            <span css={styles.parallaxSpan}>#배우는습관</span>
            <span css={styles.parallaxSpan}>#일잘러</span>
          </div>
          <div css={styles.parallaxRow}>
            <span css={styles.parallaxSpan}>#INTP</span>
            <span css={styles.parallaxSpan}>#성실</span>
            <span css={styles.parallaxSpan}>#Nerd</span>
            <span css={styles.parallaxSpan}>#적응왕</span>
            <span css={styles.parallaxSpan}>#반복개선</span>
          </div>
        </div>
      </div>
    </Article>
  );
};

export default AbilitiesArticle;
