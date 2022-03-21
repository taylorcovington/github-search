import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { HomePage } from './pages/Home';
import { UserIndex } from './pages/User';
import './index.css'

const App = () => (
  <Layout >
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user/:username" exact component={UserIndex} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default App;