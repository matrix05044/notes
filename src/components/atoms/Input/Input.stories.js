import React from 'react';
import Input from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
};

export const Login = () => <Input placeholder="login" />;
export const Seatch = () => <Input placeholder="search" search />;
