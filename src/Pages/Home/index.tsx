/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { HomeProps } from '../../interfaces/home.interface';

const Home = ({ title }: HomeProps) => {
  const [name, setName] = useState('');
  return (
    <div>{ title }</div>
  );
};

export default Home;
