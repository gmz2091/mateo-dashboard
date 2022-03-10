/* eslint-disable import/no-unresolved */
import { InputProps } from '../../../interfaces/input.interface';
import { Input as InputStyled, ContainerInput } from './input.styled';

const Input = ({ ...props } :InputProps) => (
  <ContainerInput>
    <InputStyled {...props} />
  </ContainerInput>
);

export default Input;
