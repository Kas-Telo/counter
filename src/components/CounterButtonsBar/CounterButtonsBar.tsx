import React from 'react';
import s from './ButtonsBar.module.css'
import {SuperButton} from "../SuperButton/SuperButton";


type ButtonBarPropsType = {
    startValue: number;
    maxValue: number;
    counter: number | string;
    incrementCounter: () => void;
    resetCounter: () => void;
}

export const CounterButtonsBar = (props: ButtonBarPropsType) => {

    const isIncDisabled = props.counter === props.maxValue || typeof(props.counter) === 'string'
    const isResetDisabled = props.counter === props.startValue || typeof(props.counter) === 'string'

    const incrementHandler = () => {
        props.incrementCounter();
    }

    const resetHandler = () => {
        props.resetCounter();
    }

    return (
        <div className={s.btnBarDisplay}>
            <SuperButton onClick={incrementHandler} disabled={isIncDisabled}>inc</SuperButton>
            <SuperButton onClick={resetHandler} disabled={isResetDisabled}>reset</SuperButton>
        </div>
    );
};