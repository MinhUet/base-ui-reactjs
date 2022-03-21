import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ProductListPage from './pages/ProductList';
import ProductReportPage from './pages/ProductReport';
import NotFound from '../../components/NotFound';
import ProductDetailPage from './pages/ProductDetail';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ProductListPage} exact />
        <Route
          path={`${match.path}/report/:productId`}
          component={ProductReportPage}
          exact
        />
        <Route
          path={`${match.path}/detail/:productId`}
          component={ProductDetailPage}
          exact
        />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
