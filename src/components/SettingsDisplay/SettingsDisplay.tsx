import React, {ChangeEvent} from 'react';
import s from "./SettingsDisplay.module.css";

type SettingsDisplayPropsType = {
    localStartValue: number
    localMaxValue: number
    error: boolean
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SettingsDisplay = (props: SettingsDisplayPropsType) => {
    let classNameInput = `${props.error ? s.errorInput : s.input}`

    return (
        <div className={s.settingsDisplay}>

            <div className={s.inputForm1}>
                <label>start value:</label>
                <input className={classNameInput}
                       type="number" value={props.localStartValue}
                       onChange={props.changeStartValue}

                />
            </div>

            <div className={s.inputForm2}>
                <label>max value:</label>
                <input className={classNameInput}
                       type="number"
                       value={props.localMaxValue}
                       onChange={props.changeMaxValue}/>
            </div>

        </div>
    );
};

