import { Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import './index.scss';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { errors, formState } = form;
  const hasError = errors[name];

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        as={Input.Password}
        label={label}
        disabled={disabled}
        status={!!hasError ? 'error' : 'infor'}
        placeholder='Please enter password'
        className='password-field'
      />
      {!!hasError && (
        <p className='password-field__error'>{errors[name]?.message}</p>
      )}
    </>
  );
}

export default PasswordField;
