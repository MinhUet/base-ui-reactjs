import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from './../../component/TodoForm';
import useElementOnScreen from './../../../../hooks/useElementOnScreen';
import './productListPage.scss';

ProductListPage.propTypes = {};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25,
};

function ProductListPage(props) {
  const handleTodoForm = (value) => {
    console.log('form submit', value);
  };

  const [containerRef1, isVisible1] = useElementOnScreen(options);
  const [containerRef2, isVisible2] = useElementOnScreen(options);

  return (
    <div className='product-item'>
      <div className='product-item__header'></div>
      <div className='product-item__body'>
        <div className='product-item__body-left'></div>
        <div className='product-item__body-right'>
          <div className='product-item__body-right__header'>
            Call api when element on viewport
          </div>
          <div className='product-item__body-right__title'>
            {isVisible1 ? 'Element1 on screen' : 'Element1 out screen'}
          </div>
          <div className='product-item__body-right__title'>
            {isVisible2 ? 'Element2 on screen' : 'Element2 out screen'}
          </div>
          <div className='product-item__body-right__element'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, distinctio quos. Voluptatum, dolore delectus. Error,
              animi aspernatur ex, culpa molestiae corrupti unde harum nostrum
              odit quo quam blanditiis pariatur voluptate. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veritatis, distinctio quos.
              Voluptatum, dolore delectus. Error, animi aspernatur ex, culpa
              molestiae corrupti unde harum nostrum odit quo quam blanditiis
              pariatur voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, distinctio quos. Voluptatum, dolore
              delectus. Error, animi aspernatur ex, culpa molestiae corrupti
              unde harum nostrum odit quo quam blanditiis pariatur voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, distinctio quos. Voluptatum, dolore delectus. Error,
              animi aspernatur ex, culpa molestiae corrupti unde harum nostrum
              odit quo quam blanditiis pariatur voluptate. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veritatis, distinctio quos.
              Voluptatum, dolore delectus. Error, animi aspernatur ex, culpa
              molestiae corrupti unde harum nostrum odit quo quam blanditiis
              pariatur voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, distinctio quos. Voluptatum, dolore
              delectus. Error, animi aspernatur ex, culpa molestiae corrupti
              unde harum nostrum odit quo quam blanditiis pariatur voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, distinctio quos. Voluptatum, dolore delectus. Error,
              animi aspernatur ex, culpa molestiae corrupti unde harum nostrum
              odit quo quam blanditiis pariatur voluptate. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veritatis, distinctio quos.
              Voluptatum, dolore delectus. Error, animi aspernatur ex, culpa
              molestiae corrupti unde harum nostrum odit quo quam blanditiis
              pariatur voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, distinctio quos. Voluptatum, dolore
              delectus. Error, animi aspernatur ex, culpa molestiae corrupti
              unde harum nostrum odit quo quam blanditiis pariatur voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, distinctio quos. Voluptatum, dolore delectus. Error,
              animi aspernatur ex, culpa molestiae corrupti unde harum nostrum
              odit quo quam blanditiis pariatur voluptate. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veritatis, distinctio quos.
              Voluptatum, dolore delectus. Error, animi aspernatur ex, culpa
              molestiae corrupti unde harum nostrum odit quo quam blanditiis
              pariatur voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, distinctio quos. Voluptatum, dolore
              delectus. Error, animi aspernatur ex, culpa molestiae corrupti
              unde harum nostrum odit quo quam blanditiis pariatur voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, distinctio quos. Voluptatum, dolore delectus. Error,
              animi aspernatur ex, culpa molestiae corrupti unde harum nostrum
              odit quo quam blanditiis pariatur voluptate. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veritatis, distinctio quos.
              Voluptatum, dolore delectus. Error, animi aspernatur ex, culpa
              molestiae corrupti unde harum nostrum odit quo quam blanditiis
              pariatur voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, distinctio quos. Voluptatum, dolore
              delectus. Error, animi aspernatur ex, culpa molestiae corrupti
              unde harum nostrum odit quo quam blanditiis pariatur voluptate.
              Voluptatum, dolore delectus. Error, animi aspernatur ex, culpa
              molestiae corrupti unde harum nostrum odit quo quam blanditiis
              pariatur voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, distinctio quos. Voluptatum, dolore
              delectus. Error, animi aspernatur ex, culpa molestiae corrupti
              unde harum nostrum odit quo quam blanditiis pariatur voluptate.
              Voluptatum, dolore delectus. Error, animi aspernatur ex, culpa
              molestiae corrupti unde harum nostrum odit quo quam blanditiis
              pariatur voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, distinctio quos. Voluptatum, dolore
              delectus. Error, animi aspernatur ex, culpa molestiae corrupti
              unde harum nostrum odit quo quam blanditiis pariatur voluptate.
              Voluptatum, dolore delectus. Error, animi aspernatur ex, culpa
              molestiae corrupti unde harum nostrum odit quo quam blanditiis
              pariatur voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, distinctio quos. Voluptatum, dolore
              delectus. Error, animi aspernatur ex, culpa molestiae corrupti
              unde harum nostrum odit quo quam blanditiis pariatur voluptate.
              Voluptatum, dolore delectus. Error, animi aspernatur ex, culpa
              molestiae corrupti unde harum nostrum odit quo quam blanditiis
              pariatur voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, distinctio quos. Voluptatum, dolore
              delectus. Error, animi aspernatur ex, culpa molestiae corrupti
              unde harum nostrum odit quo quam blanditiis pariatur voluptate.
            </p>
            <div
              className='product-item__body-right__element--content'
              ref={containerRef1}
            >
              Element 1
            </div>
            <div
              className='product-item__body-right__element--content'
              ref={containerRef2}
            >
              Element 2
            </div>
          </div>
        </div>
      </div>
      <div className='product-item__footer'></div>
    </div>
  );
}

export default ProductListPage;
