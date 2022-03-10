/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */

import { LoginProps } from '../../Pages/Login';

const URL = 'https://peaceful-peak-79242.herokuapp.com/api/auth/login';

export const login = async (data: LoginProps) => {
  const { email, password } = data;
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error);
  }
};
