import './App.css';
import React, { useState } from 'react';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext();
export const ThemeContext = React.createContext();

function App() {
  const initThemeContextValue = {
    theme: 'light',
    setTheme: (theme) => {
      setState({ ...state, theme });
    },
  };

  const [state, setState] = useState(initThemeContextValue);

  return (
    <div className='App'>
      <h2>Welcom to App!!</h2>
      <UserContext.Provider value={{ name: 'XYZ' }}>
        <ThemeContext.Provider value={{ ...state }}>
          <ComponentC />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
