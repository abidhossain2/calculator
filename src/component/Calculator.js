import React from 'react';
import { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [result, setResult] = useState('');
    const handleDigit = (e) => {
        setResult(result.concat(e.target.value))
    }
    const handleClear = () => {
        setResult('')
    }

    const handleResult = () => {
        setResult(eval(result).toString())
    }
    return (
        <div className='container'>
            <div className="calculator-container">
                <div className="display">
                    <input type="text" placeholder='0' value={result}/>
                </div>
                <div className='btn-container'>
                    <input onClick={handleDigit} value= '9' type='button'/>
                    <input onClick={handleDigit} value= '8' type='button'/>
                    <input onClick={handleDigit} value= '7' type='button'/>
                    <input onClick={handleDigit} value= '6' type='button'/>
                    <input onClick={handleDigit} value= '5' type='button'/>
                    <input onClick={handleDigit} value= '4' type='button'/>
                    <input onClick={handleDigit} value= '3' type='button'/>
                    <input onClick={handleDigit} value= '2' type='button'/>
                    <input onClick={handleDigit} value= '1' type='button'/>
                    <input onClick={handleDigit} value= '0' type='button'/>
                    <input onClick={handleDigit} value= '+' type='button'/>
                    <input onClick={handleDigit} value= '-' type='button'/>
                    <input onClick={handleDigit} value= '*' type='button'/>
                    <input onClick={handleDigit} value= '/' type='button'/>
                    <input onClick={handleClear} value= 'Clear' type='button'/>
                    <input onClick={handleResult} value= 'Ans' type='button'/>
                </div>
            </div>
        </div>
    );
};

export default Calculator;