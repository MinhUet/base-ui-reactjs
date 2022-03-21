import 'antd/dist/antd.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import CartFeature from './features/Cart';
import CounterFeature from './features/Counter';
import ProductFeature from './features/Product';

App.propTypes = {};

function App(props) {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={ProductFeature} exact />
        <Route path='/product' component={ProductFeature} />
        <Route path='/cart' component={CartFeature} />
        <Route path='/count' component={CounterFeature} />

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
