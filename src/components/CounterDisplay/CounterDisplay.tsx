import React from 'react';
import s from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
    counter: number;
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {
    let spanClassName = `${s.spanDisplay} ${props.counter === 5 ? s.errorColor : ''}`
    return (
        <div className={s.counterDisplay}>
            <span className={spanClassName}>{props.counter}</span>
        </div>
    );
};