import './App.css';
import {Router, Link} from '@reach/router';
import AllTrips from './components/AllTrips';


function App() {
  return (
    <div className="App">
      <Router>
        <AllTrips path="/"></AllTrips>
      </Router>
    </div>
  );
}

export default App;
