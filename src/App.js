import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I love you Ganga
        </p>
        <a
          className="App-link"
          href="https://stormy-plateau-69270.herokuapp.com/love"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me or Scroll Down
        </a>
      </header>
    </div>
  );
}

export default App;
