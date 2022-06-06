import styled from '@emotion/styled';
import { useForm, FormProvider } from 'react-hook-form';
import { FC, useCallback, useState } from 'react';
import { Input } from 'postcss';
import React from '@emotion/styled';
import CustomLabel from '@pages/contact/CustomLabel';

const Base = styled.div``;
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
`;
const Button = styled.button`
  width: 120px;
  padding: 10px;
  font-size: 15px;
  background-color: #000;
  color: #fff;
  border: none;
  font-family: 'Jost', 'Hahmlet', sans-serif;
  cursor: pointer;
`;
interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  const onSubmit = useCallback((data: IForm) => {
    console.log(data);
  }, []);
  return (
    <Base>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomLabel label={'Name'}>
            <input type={'text'} {...register('name')} autoComplete={'off'} />
          </CustomLabel>
          <CustomLabel label={'Email Address'}>
            <input type={'email'} {...register('email')} autoComplete={'off'} />
          </CustomLabel>
          <CustomLabel label={'Subject'}>
            <input type={'text'} {...register('subject')} autoComplete={'off'} />
          </CustomLabel>
          <CustomLabel label={'Message'}>
            <textarea {...register('message')} autoComplete={'off'} />
          </CustomLabel>
          <Button type={'submit'}>submit</Button>
        </form>
      </Container>
    </Base>
  );
};

export default Contact;
