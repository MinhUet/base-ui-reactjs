import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';
import './index.scss';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className='counter'>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterFeature;
