import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function hendlFromSubmit(event) {
    event.preventDefault();
    const userData = {
      username,
      password,
    };
    alert(JSON.stringify(userData));
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={hendlFromSubmit}>
        <label>
          User name:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
