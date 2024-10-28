'use client'
import React from 'react';

// Let's say we want to make an API call using whatever
// text the user is typing on the input. If we make an API
// call every time we listen to a keyboard stroke, this can
// cause a lot of issues OR if the user types really  
// fast, not all the data in the input might be sent to the back end.
//
// That's when a debouncer comes in. Let's wait for when the user
// stops typing and ONLY THEN make the API call (same approach
// with auto saving).
//
// Let's create the custom hook:
const useDebounce = (text: string, delay: number) => {
    const [debounce, setDebounce] = React.useState('');

    React.useEffect(() => {
        // Creating a timer
        const timer = setTimeout(() => {
            setDebounce(text);
        }, delay);

        // This cleanup function (return () => clearTimeout(timer)) is called 
        // before the next useEffect is run. This ensures the previous setTimeout 
        // is cleared before creating a new one. 
        return () => {
            clearTimeout(timer);
        }
    }, [text]);

    return debounce;
}

const Debouncer = () => {
    const DELAY = 2000;
    const [text, setText] = React.useState('');
    const debouncedText = useDebounce(text, DELAY);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Type your text here"
            />
            <p>Regular text: {text}</p>
            <p>Debounced text: {debouncedText}</p>
        </div>
    )
}

export default Debouncer