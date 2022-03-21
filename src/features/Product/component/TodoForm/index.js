import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'antd';
import PasswordField from './../../../../components/form-controls/PasswordField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const { onSubmit } = props;

  const schema = yup.object().shape({
    userName: yup
      .string()
      .required('Please enter username')
      .min(5, 'Username too short'),

    email: yup.string().required('Please enter email').email('Email invalid'),

    passWord: yup
      .string()
      .required('Please enter password')
      .min(5, 'Password too short'),

    rePassWord: yup
      .string()
      .required('Please enter retype password')
      .oneOf([yup.ref('passWord')], 'Retype password dont match'),
  });

  const form = useForm({
    defaultValues: {
      userName: '',
      email: '',
      passWord: '',
      rePassWord: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (value) => {
    if (onSubmit) {
      onSubmit(value);
    }

    form.reset();
  };

  return (
    <form>
      Username: <InputField name='userName' label='Username' form={form} />
      Email: <InputField name='email' label='Email' form={form} />
      Password: <PasswordField name='passWord' label='passWord' form={form} />
      Retype PassWord:{' '}
      <PasswordField name='rePassWord' label='RePassWord' form={form} />
      <Button onClick={form.handleSubmit(handleSubmitForm)} type='primary'>
        Primary Button
      </Button>
    </form>
  );
}

export default TodoForm;
