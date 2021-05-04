import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import Habit from "./components/Habit/Habit"

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <SideNav />
        <Habit />
      </div>
    </div>
  );
}

export default App;
