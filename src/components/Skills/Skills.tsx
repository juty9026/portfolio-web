/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './Skills.emotion';
import SkillsOverview from './SkilsOverview';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

const Skills: React.FC = () => {
  const ref = React.useRef(null);

  const [footerVisible, setFooterVisible] = React.useState<boolean>(false);

  const options = React.useMemo(
    () => ({
      root: undefined,
      rootMargin: '0px',
      threshold: 0.9,
    }),
    []
  );

  const containerEntry = useIntersectionObserver({ ref, options });

  React.useEffect(() => {
    setFooterVisible(!!containerEntry?.isIntersecting);
  }, [containerEntry]);

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
