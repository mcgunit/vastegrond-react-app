

import './App.css';

import Main from './components/Main';

import { AppProvider } from "./context/App.Context";


function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
