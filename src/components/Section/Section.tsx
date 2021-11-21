/** @jsxImportSource @emotion/react */
import { SectionData } from '@types';
import { container } from './Section.emotion';
import Divider from '@components/Divider';

const Section = ({ title, contents }: SectionData) => {
  return (
    <div css={container}>
      <h1>{title}</h1>
      <Divider />
      {contents.map((content) => (
        <>
          <h1>{content.title}</h1>
          <p>{content.content}</p>
        </>
      ))}
    </div>
  );
};

export default Section;
