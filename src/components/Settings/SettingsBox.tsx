import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../CounterBox/CounterBox.module.css";
import {SettingsDisplay} from "../SettingsDisplay/SettingsDisplay";
import {SettingsButtonsBar} from "../SettingsButtonsBar/SettingsButtonsBar";

type SettingsBoxPropsType = {
    startValue: number
    maxValue: number
    saveValuesSettings: (startValue: number, maxValue: number) => void
    setCounter: (counter: number | string) => void
    setIncorrectValue: (error: boolean) => void
}

export const SettingsBox = (props: SettingsBoxPropsType) => {
    const [localStartValue, setLocalStartValue] = useState(props.startValue)
    const [localMaxValue, setLocalMaxValue] = useState(props.maxValue)
    const [error, setError] = useState(false)

    useEffect(() => {
        const startValueAsString = localStorage.getItem('startValue')
        const maxValueAsString = localStorage.getItem('maxValue')

        if (startValueAsString && maxValueAsString) {
            const startValue = JSON.parse(startValueAsString)
            const maxValue = JSON.parse(maxValueAsString)
            setLocalStartValue(startValue);
            setLocalMaxValue(maxValue);
            props.saveValuesSettings(startValue, maxValue)
        }
    }, [])


    const changeError = (startValue: number, maxValue: number) => {
        if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
            setError(true)
            props.setCounter('Incorrect value!')
            props.setIncorrectValue(true)
        } else {
            setError(false)
            props.setIncorrectValue(false)
            props.setCounter(`enter values and press 'set'`)
        }
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let startV = Number(e.currentTarget.value)
        setLocalStartValue(startV);
        changeError(startV, localMaxValue)
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxV = Number(e.currentTarget.value)
        setLocalMaxValue(maxV);
        changeError(localStartValue, maxV)
    }

    const setValuesSettings = () => {
        if (localMaxValue > localStartValue && localMaxValue > 0 && localStartValue > 0) {
            props.saveValuesSettings(localStartValue, localMaxValue)
        }
    }

    return (
        <div className={s.counter}>
            <div className={s.innerCounter}>
                <SettingsDisplay
                    localStartValue={localStartValue}
                    localMaxValue={localMaxValue}
                    error={error}
                    changeStartValue={changeStartValue}
                    changeMaxValue={changeMaxValue}
                />
                <SettingsButtonsBar setValuesSettings={setValuesSettings}/>
            </div>
        </div>
    );
};
