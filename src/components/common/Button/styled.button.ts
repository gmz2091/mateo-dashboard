/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import styled from 'styled-components';
import { myTheme } from '../../../theme';

export const Button = styled.button`
    background-color: ${myTheme.colors.primary};
    border-radius: ${myTheme.borderRadius};
    color: ${myTheme.colors.main};
    font-size: 1.5rem;
    padding: 1rem 2rem;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: none;
    border: none;
    &:hover {
        background-color: ${myTheme.colors.secondary};
        color: ${myTheme.colors.main};
    }
`;

export const ButtonLink = styled.a`
    background-color: ${myTheme.colors.primary};
    border-radius: ${myTheme.borderRadius};
    color: ${myTheme.colors.main};
    font-size: 1.5rem;
    padding: 1rem 2rem;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: none;
    border: none;
    &:hover {
        background-color: ${myTheme.colors.secondary};
        color: ${myTheme.colors.main};
    }
`;
