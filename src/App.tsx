import './App.css';
import data from '@data';
import {
  AboutMeArticle,
  AbilitiesArticle,
  IntroductionArticle,
  WorkExperienceArticle,
  SkillsArticle,
} from '@components/Article';

function App() {
  return (
    <div className="App">
      <main>
        <AboutMeArticle data={data.aboutMe} />
        <AbilitiesArticle data={data.abilities} />
        <IntroductionArticle data={data.introduction} />
        <WorkExperienceArticle data={data.workExperience} />
        <SkillsArticle />
      </main>
    </div>
  );
}

export default App;
