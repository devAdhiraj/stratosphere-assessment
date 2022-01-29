import './App.css';
import BottomComponent from './components/BottomComponent';
import MiddleComponent from './components/MiddleComponent';
import TopComponent from './components/TopComponent';
import data from './page-data.json';

function App() {
  return (
    <div className="App">
      <TopComponent data={data.TopComponent}/>
      <MiddleComponent data={data.MiddleComponent} />
      <BottomComponent data={data.BottomComponent} />
      <div>
        
      </div>
    </div>
  );
}

export default App;
