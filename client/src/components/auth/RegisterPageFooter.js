import React from 'react';
import CustomPrimaryButton from '../shared/CustomPrimaryButton';
import RedirectInfo from '../shared/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate('/login');
  };

  return (
    <>
      <Tooltip
        title={
          !isFormValid
            ? 'Please check your inputs.'
            : 'Press register button to register!'
        }
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          ></CustomPrimaryButton>
        </div>
      </Tooltip>

      <RedirectInfo
        text="Already have an account?"
        redirectText="Login"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
