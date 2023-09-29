import "./App.css";
import Header from "./Components/Header/Header";
import SearchInput from "./Components/Searchinput/SearchInput";
function App() {
  return (
    <div className="App-wrapper">
      <div className="container">
        <Header />
        <SearchInput />
      </div>
    </div>
  );
}

export default App;
