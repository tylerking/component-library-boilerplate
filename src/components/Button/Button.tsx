import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  color: string
  label: string
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ color, label, size, onClick }) => (
  <>
    <StyledButton
      aria-label={label}
      className={['button', `button--${size}`, `color--${color}`].join(' ')}
      onClick={onClick}
    >
      {label}
    </StyledButton> 
  </>
);

const StyledButton = styled.button`
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
  transition: background 0.3s ease;

  &.button--small {
    padding: 5px 10px
  }

  &.button--large {
    padding: 20px 30px
  }

  &.color--red {
    background: red;
  }

  &.color--green {
    background: green;
  }

  &.color--blue {
    background: blue;
  }
`;

export default Button;