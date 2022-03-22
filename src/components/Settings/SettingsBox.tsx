import React from 'react';
import s from "../CounterBox/CounterBox.module.css";
import {SettingsDisplay} from "../SettingsDisplay/SettingsDisplay";
import {SettingsButtonsBar} from "../SettingsButtonsBar/SettingsButtonsBar";

 export const SettingsBox = () => {
    return (
        <div className={s.counter}>
            <div className={s.innerCounter}>
                <SettingsDisplay />
                <SettingsButtonsBar />
            </div>
        </div>
    );
};
