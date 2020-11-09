// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Urls from './Components/Urls';
import NewUrl from './Components/NewUrl';
import Pixels from './Components/Pixels';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Urls} />
          <Route path="/generate" exact component={NewUrl} />
          <Route path="/:id" component={Pixels} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
