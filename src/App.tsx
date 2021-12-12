import React from 'react';
import WebFont from 'webfontloader';
import './App.css';
import data from '@data';
import { AboutMeArticle, AbilitiesArticle, WorkExperienceArticle, SkillsArticle } from '@components/Article';
import Hero from '@components/Hero';

function App() {
  const [fontLoadded, setFontLoadded] = React.useState(false);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Bebas Neue', 'Jua'],
      },
      active: () => setFontLoadded(true),
    });
  }, []);

  return (
    <div className="App">
      {
        fontLoadded ? (
          <main>
            <Hero />
            <AboutMeArticle data={data.aboutMe} />
            <SkillsArticle />
            <AbilitiesArticle data={data.abilities} />
            <WorkExperienceArticle />
          </main>
        ) : null // TODO: Loading Component
      }
    </div>
  );
}

export default App;
