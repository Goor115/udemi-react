import './App.css';
import RandomMunber from './components/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomMunber maxNum={1000} />
    </div>
  );
}

export default App;
