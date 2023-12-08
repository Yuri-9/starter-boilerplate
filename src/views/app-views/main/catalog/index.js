import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Catalog = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route path={`${match.url}/products`} component={lazy(() => import(`./products`))} />
      <Route path={`${match.url}/categories`} component={lazy(() => import(`./categories`))} />
      <Route path={`${match.url}/collections`} component={lazy(() => import(`./collections`))} />
      <Route path={`${match.url}/combo`} component={lazy(() => import(`./combo`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/products`} />
    </Switch>
  </Suspense>
);

export default Catalog;
