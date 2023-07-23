import React from 'react';
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
  width: '100%',
  margin: '10px 0',
});

const Label = styled('label')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontSize: '16px',
  fontWeight: '600',
});

const Input = styled('input')({
  flexGrow: 1,
  height: '40px',
  margin: 0,
  padding: '0 5px',
  border: '1px solid black',
  borderRadius: '5px',
  color: '#dcddde',
  backgroundColor: '#40444b',
  fontSize: '16px',
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      ></Input>
    </Wrapper>
  );
};

export default InputWithLabel;
