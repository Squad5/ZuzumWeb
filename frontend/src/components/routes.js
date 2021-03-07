import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../App';
import Aboult from '../pages/Aboult';
import Levels from '../pages/Levels';
import Login from '../pages/Login';
import Register from '../pages/Register';
import LevelOne from '../pages/LevelOne';
import LevelOne2 from '../pages/LevelOne2';
import Gratters from '../pages/Gratters';
import Phase2 from '../pages/Phase2';
import Phase3 from '../pages/Phase3';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/Sobre" component={Aboult} exact/>
            <Route path="/fases/:id/" component={Levels} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/cadastrar" component={Register} exact/>
            <Route path="/fase1/:id/" component={LevelOne} exact/>
            <Route path="/fase1-2/:id/" component={LevelOne2} exact/> 
            <Route path="/concluido/:id/" component={Gratters} exact/>
            <Route path="/fase2/:id/" component={Phase2} exact/>
            <Route path="/fase3/:id/" component={Phase3} exact/>
        </Switch>
    )
}

export default Routes;