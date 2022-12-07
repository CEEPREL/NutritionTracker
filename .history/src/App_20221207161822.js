
import './App.css';
import './index.css';
import Header from './components/Header';
import TotalNutrients from './components/TotalNutrients';
import Main from './components/Main';

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <TotalNutrients />
        <Main />
      </div>

    </div>
  );
}

export default App;
