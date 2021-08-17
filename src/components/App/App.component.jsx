import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import Search from '../../pages/Search';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import VideoDetailsView from '../../pages/VideoDetailsView';
import Layout from '../Layout';
import StoreProvider from '../../store/StoreProvider';

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/search/:query" component={Search} />
              <Route exact path="/view/:videoId" component={VideoDetailsView} />
              <Route exact path="/login" component={LoginPage} />
              <Private>
                <Route exact path="/favorites" />
              </Private>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
