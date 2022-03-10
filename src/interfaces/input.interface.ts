import React from 'react';
/* eslint-disable no-unused-vars */
export interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}
