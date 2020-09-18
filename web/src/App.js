import React from 'react';
import './assets/style/style.scss';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';
import { WelcomePage } from '@pages/welcome';
import { Docs } from '@pages/docs';
import { Meetup } from '@pages/meetup';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={WelcomePage}/>
                <Route exact path="/docs" component={Docs}/>
                <Route exact path="/meetup" component={Meetup}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default App;
