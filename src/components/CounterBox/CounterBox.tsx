import React from 'react';
import {CounterButtonsBar} from "../CounterButtonsBar/CounterButtonsBar";
import {CounterDisplay} from "../CounterDisplay/CounterDisplay";
import s from './CounterBox.module.css'

type CounterPropsType = {
    counter: number;
    incrementCounter: () => void;
    resetCounter: () => void;
}

export const CounterBox = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <div className={s.innerCounter}>
                <CounterDisplay counter={props.counter}/>
                <CounterButtonsBar counter={props.counter}
                                   incrementCounter={props.incrementCounter}
                                   resetCounter={props.resetCounter}/>
            </div>
        </div>
    );
};