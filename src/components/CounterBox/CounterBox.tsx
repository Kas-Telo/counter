import React from 'react';
import {CounterButtonsBar} from "../CounterButtonsBar/CounterButtonsBar";
import {CounterDisplay} from "../CounterDisplay/CounterDisplay";
import s from './CounterBox.module.css'

type CounterPropsType = {
    startValue: number;
    maxValue: number;
    counter: number | string;
    incrementCounter: () => void;
    resetCounter: () => void;
    setIncorrectValue: boolean
}

export const CounterBox = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <div className={s.innerCounter}>
                <CounterDisplay counter={props.counter} maxValue={props.maxValue} incorrectValue={props.setIncorrectValue}/>
                <CounterButtonsBar
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    counter={props.counter}
                    incrementCounter={props.incrementCounter}
                    resetCounter={props.resetCounter}/>
            </div>
        </div>
    );
};