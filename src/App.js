import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './userContext';

function App() {
  return (
    <div className='App'>
      <h2>Welcom to App!!</h2>
      <UserProvider value={{ name: 'Abhishek' }}>
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
