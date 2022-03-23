import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterBox} from "./components/CounterBox/CounterBox";
import {SettingsBox} from "./components/Settings/SettingsBox";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number | string>(startValue);
    const [incorrectValue, setIncorrectValue] = useState(false)



    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    function saveValuesSettings(startValue: number, maxValue: number) {
        setStartValue(startValue);
        setMaxValue(maxValue);
        setCounter(startValue)
    }

    function incrementCounter() {
        if (typeof (counter) !== 'string') {
            const incrementedCounter = counter + 1;
            (startValue < maxValue && setCounter(incrementedCounter))
        }
    }

    function resetCounter() {
        setCounter(startValue);
    }


    return (
        <div className={"app-wrapper"}>
            <div className={'settings-wrapper'}>
                <SettingsBox
                    startValue={startValue}
                    maxValue={maxValue}
                    saveValuesSettings={saveValuesSettings}
                    setCounter={setCounter}
                    setIncorrectValue={setIncorrectValue}
                />
            </div>
            <div className={'counter-wrapper'}>
                <CounterBox
                    startValue={startValue}
                    maxValue={maxValue}
                    counter={counter}
                    incrementCounter={incrementCounter}
                    resetCounter={resetCounter}
                    setIncorrectValue={incorrectValue}
                />
            </div>
        </div>


    );
}


export default App;
