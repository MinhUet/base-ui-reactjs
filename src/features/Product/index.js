import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ProductListPage from './pages/ProductList';
import ProductReportPage from './pages/ProductReport';
import NotFound from '../../components/NotFound';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ProductListPage} exact></Route>
        <Route
          path={`${match.path}/:productId`}
          component={ProductReportPage}
          exact
        ></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default ProductFeature;
