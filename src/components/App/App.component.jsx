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
import FavoriteVideosView from '../../pages/FavoriteVideosView';

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
                <Route exact path="/favorites" component={FavoriteVideosView} />
                <Route
                  exact
                  path="/favorite/:videoId"
                  render={(props) => <VideoDetailsView {...props} fromFavorite />}
                />
              </Private>
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </AuthProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
