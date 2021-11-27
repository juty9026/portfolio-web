import './App.css';
import data from '@data';
import {
  AboutMeArticle,
  AbilitiesArticle,
  IntroductionArticle,
  WorkExperienceArticle,
  SkillsArticle,
} from '@components/Article';
import Hero from '@components/Hero';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
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
