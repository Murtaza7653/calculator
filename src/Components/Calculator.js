import React from 'react';
import { useState } from 'react';
/* eslint no-eval: 0 */

export default function Calculator() {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = (value) => {
        if (
            (value !== '-') &&
            ((ops.includes(value) && calc === '') ||
                (ops.includes(value) && ops.includes(calc.slice(-1))))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
            )
        }
        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
        setResult("");
    }

    const del = () => {
        if (calc === "") {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
        setResult(eval(value).toString());
    }

    const clear = () => {
        setCalc("");
        setResult("");
    }

    return (
        <>
        <h3 className='text-center my-3' style={{color: "#000814"}}>Hello! This is a Calculator developed using React JS.</h3>
            <div className="App my-3">
                <div className="calculator">
                    <div className="display">
                        {result ? <span>({result})</span> : ''} &nbsp;
                        {calc || "0"}
                    </div>

                    <div className="operators">
                        <button onClick={() => updateCalc('+')}>+</button>
                        <button onClick={() => updateCalc('-')}>-</button>
                        <button onClick={() => updateCalc('*')}>*</button>
                        <button onClick={() => updateCalc('/')}>/</button>
                        <button onClick={() => del()}>DEL</button>
                        <button onClick={() => clear()}>CE</button>
                    </div>

                    <div className="digits">
                        {createDigits()}
                        <button onClick={() => updateCalc('0')}>0</button>
                        <button onClick={() => updateCalc('.')}>.</button>
                        <button onClick={() => calculate()}>=</button>
                    </div>
                </div>
            </div>
        </>
    )

}