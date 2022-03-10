/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { LoginProp } from '../../interfaces/privateRoute.interface';
import { User } from '../../interfaces/user.interface';
import { login } from '../../utils/auth';
import { Form } from './login.styled';

export interface LoginProps {
  email: string;
  password: string;
}

const Login = ({ user, handleSession }:LoginProp) => {
  const [data, setData] = useState<LoginProps>({
    email: '',
    password: '',
  });

  const [errorLog, setErrorLog] = useState(false);

  const handleChange = (e:any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const userData: User = await login(data);

    if (userData.message === 'User not authorized'
    || userData.message === 'Not user found with this email'
    || userData.message === 'Unauthorized'
    ) {
      handleSession(false);
      setErrorLog(true);
    } else if (userData.message !== 'User not authorized') {
      handleSession(true);
      setErrorLog(false);
      const token = userData.access_token;
      localStorage.setItem('access_token', token);
    } else {
      setErrorLog(true);
    }
  };

  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <Form onSubmit={(e) => {
      handleSubmit(e);
    }}
    >
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => { handleChange(e); }}
        style={{ borderColor: errorLog ? 'red' : '#ccc' }}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => { handleChange(e); }}
        style={{ borderColor: errorLog ? 'red' : '#ccc' }}
      />
      <Button type="submit" title="Login" />
    </Form>
  );
};

export default Login;
