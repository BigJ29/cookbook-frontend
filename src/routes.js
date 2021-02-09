import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Onboarding from './pages/Onboarding/Onboarding'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/onboarding" exact component={Onboarding} />
      </Switch>
    </BrowserRouter>
  );
}