import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import './App.css';
import { AbilitiesArticle, AboutMeArticle, ProjectsArticle, SkillsArticle } from '@components/Article';
import Hero from '@components/Hero';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Bebas Neue', 'Noto Sans', 'Vujahday Script'],
      },
    });
  }, []);

  return (
    <ParallaxProvider>
      <div className="App">
        <Hero />
        <main>
          <AboutMeArticle />
          <SkillsArticle />
          <AbilitiesArticle />
          <ProjectsArticle />
        </main>
      </div>
    </ParallaxProvider>
  );
}

export default App;
