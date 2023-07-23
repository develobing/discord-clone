import React from 'react';
import InputWithLabel from '../shared/InputWithLabel';

const LoginPageInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="E-mail"
        type="email"
        placeholder="Enter your email"
      ></InputWithLabel>

      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password"
      ></InputWithLabel>
    </>
  );
};

export default LoginPageInputs;
