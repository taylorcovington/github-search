import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { HomePage } from './pages/Home';
import { User } from './pages/User';

const App = () => (
  <Layout >
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user/:id" exact component={User} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default App;