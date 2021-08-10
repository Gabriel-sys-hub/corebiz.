import { HomePage } from './Pages/HomePage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
}

export default App;
