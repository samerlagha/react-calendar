import React from 'react';
import { generateNumbersRange } from '../utilities';

//start task 
export const getOptionsBegin = () => {

    return generateNumbersRange(0, 23).map(arg => {
        const hours = `0${arg}`.slice(-2);
        let increase = 0;
        let minutes = `0${increase}`;
        let optionBegin = [];

        for (let i = 0; i < 4; i++) {
            optionBegin.push(
                <option
                    key={arg + i}
                    value={`${hours}:${minutes.slice(-2)}`}
                >{`${hours.slice(-2)}:${minutes.slice(-2)}`}</option>
            );
            increase += 15;
            minutes = `0${increase}`;
        }
        return optionBegin;
    });
}