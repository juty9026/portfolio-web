import logo from './logo.svg';
import './App.css';
import data from '@data';
import Article from '@section/Article';
import AboutMe from '@section/AboutMe';
import Introduction from '@section/Introduction';
import Abilities from '@section/Abilities';
import Skills from '@section/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
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
        <Article title="Skills Overview" fullHeight>
          <Skills />
        </Article>
      </main>
    </div>
  );
}

export default App;
