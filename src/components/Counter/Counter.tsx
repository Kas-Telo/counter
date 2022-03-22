import React from 'react';
import {ButtonsBar} from "../ButtonsBar/ButtonsBar";
import {CounterDisplay} from "../CounterDisplay/CounterDisplay";
import s from './Counter.module.css'

type CounterPropsType = {
    counter: number;
    incrementCounter: () => void;
    resetCounter: () => void;
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <CounterDisplay counter={props.counter}/>
            <ButtonsBar counter={props.counter} incrementCounter={props.incrementCounter} resetCounter={props.resetCounter}/>
        </div>
    );
};