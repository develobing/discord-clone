import React, { useEffect, useState } from 'react';
import AuthBox from '../shared/AuthBox';
import { Typography } from '@mui/material';
import RegisterInputs from './RegisterInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../utils/validators';
import { getActions } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ register }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const user = { email, username, password };
    register(user, navigate);
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, username, password }));
  }, [email, username, password, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: 'white' }}>
        Create an Account
      </Typography>

      <RegisterInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      ></RegisterInputs>

      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      ></RegisterPageFooter>
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(null, mapActionsToProps)(RegisterPage);
