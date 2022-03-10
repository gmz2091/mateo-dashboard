/* eslint-disable import/no-unresolved */
import { Button as ButtonStyle } from './styled.button';
import { ButtonProps } from '../../../interfaces/button.interface';

const Button = ({ ...props }: ButtonProps) => (
  <ButtonStyle onClick={props.onClick}>{props.title}</ButtonStyle>
);

export default Button;
