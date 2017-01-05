/**
 * Created by fnduister on 12/19/2016.
 */
import React from 'react';
import { IndexRoute, Route, hashHistory ,Router} from 'react-router';
import App from '../Components/App';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App} />
=    </Router>
);
export default routes;