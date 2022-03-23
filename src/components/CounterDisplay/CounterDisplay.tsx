import React from 'react';
import s from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
    counter: number | string;
    maxValue: number;
    incorrectValue: boolean
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {
    let spanClassName;
    if (typeof (props.counter) === 'number') {
        spanClassName = `${s.spanDisplay} ${props.counter === props.maxValue && s.errorColor}`
    } else if (props.incorrectValue) {
        spanClassName = `${s.spanDisplay} ${s.textSpan} ${s.errorColor}`
    } else {
        spanClassName = `${s.spanDisplay} ${s.textSpan}`
    }
    return (
        <div className={s.counterDisplay}>
            <span className={spanClassName}>{props.counter}</span>
        </div>
    );
};