import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const SuperButton: React.FC<DefaultButtonPropsType> = (
    {
        className,
        ...restProps
    }
) => {

    let finalClassName = `${className ? s.className : s.superButton}`

    return (
        <button className={finalClassName} {...restProps}></button>
    );
};
