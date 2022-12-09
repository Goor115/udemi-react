import { useState } from 'react';

function TodoForm(addTodo) {
  const [text, setText] = useState('');
  const onSubmitHendler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmitHendler}>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
