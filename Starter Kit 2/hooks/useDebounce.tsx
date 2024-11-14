import React, { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)

        // Basically, when the user types, since we're passing
        // the input value here as a prop, and then as a 
        // variable in this dependency array. When this hook
        // unmounts, it will clear the time out before mounting again.
        return () => {
            clearInterval(timeoutId)
        }
    }, [value]);
}

export default useDebounce;

// How this custom hook would be used in a component:
// import useDebounce from './useDebounce';

// const SearchComponent = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500 ms debounce delay

//   // Fetch or process the search term only when debouncedSearchTerm changes
//   useEffect(() => {
//     if (debouncedSearchTerm) {
//       // Simulate an API call or expensive calculation
//       console.log("Searching for:", debouncedSearchTerm);
//       // You can replace this with an actual API call
//     }
//   }, [debouncedSearchTerm]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Type to search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <p>Search term: {debouncedSearchTerm}</p>
//     </div>
//   );
// };
