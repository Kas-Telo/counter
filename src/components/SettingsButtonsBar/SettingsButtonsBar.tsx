import React from 'react';
import s from "../CounterButtonsBar/ButtonsBar.module.css";

export const SettingsButtonsBar = () => {
    const setHandler = () => {
       //code ;
    }

    return (
        <div className={s.btnBarDisplay}>
            <div className={s.btnDisplay}>
                <button
                    onClick={setHandler}>
                    set
                </button>
            </div>
        </div>
    );
};
