import logo from './logo.svg';
import './App.css';
import data from '@data';
import Section from '@components/Section';
import AboutMe from '@components/AboutMe/AboutMe';
import Introduction from '@components/Introduction/Introduction';
import Abilities from '@components/Abilities/Abilities';

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
      <Section title="About Me">
        <AboutMe data={data.aboutMe} />
      </Section>
      <Section title="Introduction">
        <Introduction data={data.introduction} />
      </Section>
      <Section title="Abilities">
        <Abilities data={data.abilities} />
      </Section>
    </div>
  );
}

export default App;
