import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={5} hasPat={true} />
      <PetInfo animal="dog" age={7} hasPat={false} />
    </div>
  );
}

export default App;
