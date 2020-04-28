import React from 'react';
import { generateNumbersRange } from '../utilities';

export const getOptionsEnd = () => {

    return generateNumbersRange(0, 24).map(arg => {
        const hours = `0${arg}`.slice(-2);
        let increase = 0;
        let minutes = `0${increase}`;
        let optionEnd = [];

        for (let i = 0; i < 4; i++) {
            optionEnd.push(
                <option
                    key={arg + i}
                    value={`${hours}:${minutes.slice(-2)}`}
                >{`${hours.slice(-2)}:${minutes.slice(-2)}`}</option>
            );
            increase += 15;
            minutes = `0${increase}`;
            if (hours === '24') i = 4
        }
        return optionEnd;
    });
}