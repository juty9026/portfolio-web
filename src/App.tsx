import './App.css';
import data from '@data';
import AboutMeArticle from '@components/Article/AboutMeArticle';
import AbilitiesArticle from '@components/Article/AbilitiesArticle';
import IntroductionArticle from '@components/Article/IntroductionArticle';
import WorkExperienceArticle from '@components/Article/WorkExperienceArticle';
import SkillsArticle from '@components/Article/SkillsArticle';

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
