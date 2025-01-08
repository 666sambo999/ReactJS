import logo from './logo.svg';
import './App.css';
import Artical from './Artical/Artical';
//import img from './public';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello ReactJS </h1>
        <p>
          Welcome to <code>src/App.js</code> and id Home.
        </p>
        <a
          className="App-link"
          href="https://github.com/okovtun/PD_321_WEB/tree/master/React"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terminator
        </a>
        <p>

        </p>
      </header>
      <Artical> 
      </Artical>
    </div>
  );
}

export default App;
