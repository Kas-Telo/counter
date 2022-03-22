import React, {useState} from 'react';
import './App.css';
import {CounterBox} from "./components/CounterBox/CounterBox";
import {SettingsBox} from "./components/Settings/SettingsBox";

function App() {
    let [counter, setCounter] = useState<number>(0);

    const incrementCounter = () => {
        const incrementedCounter = counter + 1;
        (incrementedCounter < 6 && setCounter(incrementedCounter))
    }


    const resetCounter = () => {
        let resetCounter = 0
        setCounter(resetCounter);
    }


    return (
        <div className={"app-wrapper"}>
            <div className={'settings-wrapper'}>
                <SettingsBox/>
                </div>
            <div className={'counter-wrapper'}>
                <CounterBox
                    counter={counter}
                    incrementCounter={incrementCounter}
                    resetCounter={resetCounter}
                />
            </div>
        </div>


    );
}


export default App;
