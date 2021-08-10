import {HomePage} from './Pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router basename="/MyPortifolio">
      <Switch>
        <Route path="/" exact component={ HomePage }/>
      </Switch>
    </Router>
  );
}

export default App;
