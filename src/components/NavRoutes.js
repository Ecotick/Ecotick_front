import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav'
import Home from './Home'
import Messagerie from './Messagerie'
import MonFil from './MonFil'
import Carte from './Carte'
import Parametres from './Parametres'



function NavRoutes() {

    return (
        
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
            
        
    )
}

export default NavRoutes;