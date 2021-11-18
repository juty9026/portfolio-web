import Divider from '@components/Divider';

type SectionProps = {
  title: string;
};

const Section = ({ title }: SectionProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Divider />
    </div>
  );
};

export default Section;
