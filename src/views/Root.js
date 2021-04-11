import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';
import Login from 'views/Login';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.login} component={Login} />
          <Route
            exact
            path={routes.home}
            render={() => <Redirect to="/notes" />}
          />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.article} component={DetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.twitter} component={DetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
