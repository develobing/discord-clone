import React from 'react';
import CustomPrimaryButton from '../shared/CustomPrimaryButton';
import RedirectInfo from '../shared/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <>
      <Tooltip
        title={
          !isFormValid
            ? 'Please check your inputs.'
            : 'Press login button to login!'
        }
      >
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          ></CustomPrimaryButton>
        </div>
      </Tooltip>

      <RedirectInfo
        text="Don’t have an account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
