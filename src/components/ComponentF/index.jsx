import React, { useContext } from 'react';
import { UserContext, ThemeContext } from '../../App';

function ComponentF(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <div>
      <h3>Welcome to ComponentF!!!</h3>
      <br />
      <p>Theme---{theme}</p>
      <p>user name----{user.name}</p>
      <button onClick={() => setTheme('dark')}>Update Theme to light</button>
    </div>
  );
}

export default ComponentF;
