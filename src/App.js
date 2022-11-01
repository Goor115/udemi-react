import './App.css';
import MyComponent from './components/MyComponent';
import MyHead from './components/MyHead';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyHead />
      <MyComponent />
      <MyHead />
      <MyComponent />
    </div>
  );
}

export default App;
