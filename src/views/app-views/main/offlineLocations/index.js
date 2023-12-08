import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const OfflineLocations = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route path={`${match.url}/address`} component={lazy(() => import(`./address`))} />
      <Route path={`${match.url}/geofences`} component={lazy(() => import(`./geofences`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/address`} />
    </Switch>
  </Suspense>
);

export default OfflineLocations;
