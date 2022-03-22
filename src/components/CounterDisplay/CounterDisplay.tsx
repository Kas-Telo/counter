import React, {useState} from 'react';
import s from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
    counter: number;
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {
    return (
        <div className={s.counterDisplay}>
            <span className={props.counter === 5 ? s.errorColor : ''}>{props.counter}</span>
        </div>
    );
};