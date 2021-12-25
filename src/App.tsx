import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import './App.css';
import { AbilitiesArticle, AboutMeArticle, SkillsArticle, WorkExperienceArticle } from '@components/Article';
import Hero from '@components/Hero';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const [fontLoadded, setFontLoadded] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Bebas Neue', 'Jua'],
      },
      active: () => setFontLoadded(true),
    });
  }, []);

  return (
    <ParallaxProvider>
      <div className="App">
        {
          fontLoadded ? (
            <main>
              <Hero />
              <AboutMeArticle />
              <SkillsArticle />
              <AbilitiesArticle />
              <WorkExperienceArticle />
            </main>
          ) : null // TODO: Loading Component
        }
      </div>
    </ParallaxProvider>
  );
}

export default App;
