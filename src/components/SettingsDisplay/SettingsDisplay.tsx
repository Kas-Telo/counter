import React from 'react';
import s from "../CounterDisplay/CounterDisplay.module.css";

export const SettingsDisplay = () => {
    return (
        <div className={s.settingsDisplay}>
            <div className={s.inputForm1}>
                <label >start value:</label>
                <input type="number"/>
            </div>
            <div className={s.inputForm2}>
                <label >max value:</label>
                <input type="number"/>
            </div>
        </div>
    );
};

