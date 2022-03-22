import React from 'react';
import s from './ButtonsBar.module.css'


type ButtonBarPropsType = {
    counter: number;
    incrementCounter: () => void;
    resetCounter: () => void;
}

export const ButtonsBar = (props: ButtonBarPropsType) => {

    const isIncDisabled = props.counter === 5
    const isResetDisabled = props.counter === 0

    const incrementHandler = () => {
        props.incrementCounter();
    }

    const resetHandler = () => {
        props.resetCounter();
    }

    return (
        <div className={s.btnBarDisplay}>
            <div className={s.btnDisplay}>
                <button
                    disabled={isIncDisabled}
                    onClick={incrementHandler}>
                    inc
                </button>
            </div>
            <div className={s.btnDisplay}>
                <button
                    disabled={isResetDisabled}
                    onClick={resetHandler}>
                    reset
                </button>
            </div>
        </div>
    );
};