/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './Skills.emotion';
import SkillsOverview from './SkilsOverview';

const Skills: React.FC = () => {
  const ref = React.useRef(null);

  const [footerVisible, setFooterVisible] = React.useState(false);

  const callback = React.useCallback(([entry]) => {
    setFooterVisible(entry.isIntersecting);
  }, []);

  const options = React.useMemo(
    () => ({
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    }),
    []
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback, options]);

  return (
    <div css={style.container} ref={ref}>
      <SkillsOverview />
      {footerVisible && (
        <div style={{ position: 'sticky', bottom: 0, backgroundColor: 'aliceblue' }}>Sticky Footer</div>
      )}
    </div>
  );
};

export default Skills;
