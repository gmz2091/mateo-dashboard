/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { myTheme } from '../../../theme';

export const Input = styled.input`
    background-color: none;
    width: 100%;
    border-radius: ${myTheme.borderRadius};
    padding: 1rem 2rem;
    transition: all 0.2s ease-in-out;
    outline: none;
    border: solid 0.5px ${myTheme.colors.secondary};
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1.5rem;
    width: 100%;
    transition: all 0.2s ease-in-out;
    outline: none;
    border: none;
`;
