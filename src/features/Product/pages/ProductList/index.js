import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from './../../component/TodoForm';

ProductListPage.propTypes = {};

function ProductListPage(props) {
  const handleTodoForm = (value) => {
    console.log('form submit', value);
  };

  return (
    <div>
      <TodoForm onSubmit={handleTodoForm}></TodoForm>
    </div>
  );
}

export default ProductListPage;
