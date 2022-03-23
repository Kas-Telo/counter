import React from 'react';
import s from "../CounterButtonsBar/ButtonsBar.module.css";
import {SuperButton} from "../SuperButton/SuperButton";

type SettingsButtonsBarPropsType = {
    setValuesSettings: () => void
}

export const SettingsButtonsBar = (props: SettingsButtonsBarPropsType) => {

    const setHandler = () => {
        props.setValuesSettings()
    }

    return (
        <div className={s.btnBarDisplay}>
            <SuperButton onClick={setHandler}>set</SuperButton>
        </div>
    );
};
