import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Messagerie from './components/Messagerie'
import MonFil from './components/MonFil'
import Carte from './components/Carte'
import Parametres from './components/Parametres'


function App() {

  return (
    <>
      <Router>

        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/messagerie" exact component={Messagerie} />

          <Route path="/monfil" exact component={MonFil} />

          <Route path="/carte" exact component={Carte} />

          <Route path="/parametres" exact component={Parametres} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
