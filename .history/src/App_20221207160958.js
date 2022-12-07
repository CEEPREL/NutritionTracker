import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TotalNutrients from './components/TotalNutrients';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <TotalNutrients />
      <Main />
    </div>
  );
}

export default App;
