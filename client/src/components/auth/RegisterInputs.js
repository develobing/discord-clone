import React from 'react';
import InputWithLabel from '../shared/InputWithLabel';

const RegisterInputs = (props) => {
  const { email, setEmail, username, setUsername, password, setPassword } =
    props;

  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="E-mail Address"
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

      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter your name"
      ></InputWithLabel>
    </>
  );
};

export default RegisterInputs;
