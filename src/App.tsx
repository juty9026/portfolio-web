import './App.css';
import data from '@data';
import Article from '@components/Article';
import AboutMe from '@section/AboutMe';
import Introduction from '@section/Introduction';
import Abilities from '@section/Abilities';
import Skills from '@section/Skills';
import WorkExperience from '@section/WorkExperience';

function App() {
  return (
    <div className="App">
      <main>
        <Article title="About Me">
          <AboutMe data={data.aboutMe} />
        </Article>
        <Article title="Introduction">
          <Introduction data={data.introduction} />
        </Article>
        <Article title="Abilities">
          <Abilities data={data.abilities} />
        </Article>
        <Article title="Work Experience">
          <WorkExperience data={data.workExperience} />
        </Article>
        <Article title="Skills Overview" fullHeight>
          <Skills />
        </Article>
      </main>
    </div>
  );
}

export default App;
