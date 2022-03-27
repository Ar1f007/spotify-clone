import './App.css';
import { LeftMenu, RightMenu, MainContainer } from './components';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <RightMenu />
      <MainContainer />
      <div className="background"></div>
    </div>
  );
}

export default App;
