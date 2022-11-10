function ResetButton({ onClick, count }) {
  const buttonStyle = { backgroundColor: 'lightgreen' };
  return (
    <div>
      <button style={buttonStyle} onClick={onClick}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
