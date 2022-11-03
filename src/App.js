import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo aminal="cat" age={7} hasPet={true} />
      <PetInfo aminal="cat" age={7} hasPet={false} />
    </div>
  );
}

export default App;
