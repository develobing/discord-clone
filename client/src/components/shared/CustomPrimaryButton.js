import React from 'react';
import Button from '@mui/material/Button';

const CustomPrimaryButton = ({
  label,
  additionalStyles,
  disabled,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: '100%',
        height: '40px',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        bgcolor: '#5865a2',
        color: 'white',
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
