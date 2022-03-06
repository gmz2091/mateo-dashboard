/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { myTheme } from '../../../theme';

export const Input = styled.input`
    background-color: none;
    border-radius: ${myTheme.borderRadius};
    color: ${myTheme.colors.main};
    font-size: 1.5rem;
    padding: 1rem 2rem;
    transition: all 0.2s ease-in-out;
    outline: none;
    border: solid 1px ${myTheme.colors.primary};
    &:hover {
        background-color: ${myTheme.colors.secondary};
        color: ${myTheme.colors.main};
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    outline: none;
    border: none;
`;
