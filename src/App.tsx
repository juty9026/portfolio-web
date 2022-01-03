import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import './App.css';
import { AbilitiesArticle, AboutMeArticle, SkillsArticle, ProjectsArticle } from '@components/Article';
import Hero from '@components/Hero';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Bebas Neue', 'Jua', 'Vujahday Script'],
      },
      active: () => setFontReady(true),
    });
  }, []);

  return (
    <ParallaxProvider>
      <div className="App">
        {
          fontReady ? (
            <>
              <Hero />
              <main>
                <AboutMeArticle />
                <SkillsArticle />
                <AbilitiesArticle />
                <ProjectsArticle />
              </main>
            </>
          ) : null // TODO: Loading Component
        }
      </div>
    </ParallaxProvider>
  );
}

export default App;
