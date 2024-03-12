import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "9nikolov";
  const handleNameChange = () => {
    const names = ["David", "Sam", "Bill", "Tim"];
    // generate random integer between 0 to 2
    const pickRandomName = Math.floor(Math.random() * 3);
    return names[pickRandomName];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>👋 Hey {handleNameChange()}!</h1>
      </header>
    </div>
  );
}

export default App;
