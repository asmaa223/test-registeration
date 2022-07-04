import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <form>
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
        <label>
         Email Address:
          <input type="text" name="name" />
        </label>
        <label>
          Semester:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </a>
      </header>

 
    </div>
  );
}

export default App;
