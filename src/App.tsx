import logo from './logo.svg';
import './App.css';
import Section from '@components/Section';

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
      <Section title="Section A" />
      <Section title="Section B" />
      <Section title="Section C" />
      <Section title="Section D" />
    </div>
  );
}

export default App;
