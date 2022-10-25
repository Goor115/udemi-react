const App = ({ initialButtonText }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classList, setclassList] = React.useState('');

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setclassList('green-btn');
  };
  return (
    <div className="app">
      <button className={classList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" />);
