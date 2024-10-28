'use client';
import React from 'react';

// Handles phone number input
// * Only accepts numerical digits
// * Automatic formatting 
// * * Add parenthesis around the first 3 numbers
// * * Add hyphen after the sixth digit
const PhoneNumberInput = () => {
    const [input, setInput] = React.useState('');
    const maxLength = 10;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const currentValue = target.value;
        
        const numbers = currentValue.replace(/[^0-9]/g, "");
        const len = numbers.length;
        
        if (len >= maxLength) return;

        let formattedValue = numbers;

        if (numbers.length > 3 && numbers.length < 6) {
            formattedValue = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
        } else if (numbers.length >= 6) {
            formattedValue = `(${numbers.slice(0,3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
        }

        setInput(formattedValue);
    }

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default PhoneNumberInput;