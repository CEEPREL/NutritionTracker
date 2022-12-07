import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TotalNutrients from './components/TotalNutrients';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <TotalNutrients />
        <Main />
      </div>

    </div>
  );
}

export default App;
