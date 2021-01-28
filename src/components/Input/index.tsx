import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const InputBase = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
};

Input.defaultProps = {
  value: '',
};

export default Input;
