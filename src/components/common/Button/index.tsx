/* eslint-disable import/no-unresolved */
import React from 'react';
import { Button as ButtonStyle } from './styled.button';
import { ButtonProps } from '../../../interfaces/button.interface';

const Button = ({ ...props }: ButtonProps) => (
  <ButtonStyle onClick={props.onClick}>{props.title}</ButtonStyle>
);

export default Button;
