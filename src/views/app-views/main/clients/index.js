import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Clients = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route path={`${match.url}/clientsList`} component={lazy(() => import(`./clientsList`))} />
      <Route path={`${match.url}/clientsGroup`} component={lazy(() => import(`./clientsGroup`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/clientsList`} />
    </Switch>
  </Suspense>
);

export default Clients;
