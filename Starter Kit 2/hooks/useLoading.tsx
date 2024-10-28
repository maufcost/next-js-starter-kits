import React, { useState, useCallback } from 'react';

const useLoading = () => {
    const [loading, setLoading] = useState(false);

    // useCallback is a React hook that returns a memoized version of a function. 
    // The primary reason to use it is performance optimization—particularly when 
    // passing functions as props to child components or when using a function inside 
    // useEffect.
    //
    // In the context of useLoading, it ensures that the withLoading function 
    // is not re-created on every render unless its dependencies change. In our 
    // example, there are no dependencies, so the function will be memoized once.
    const withLoading = useCallback(async (asyncFunction: Function) => {
        setLoading(true);

        try {
            await asyncFunction();
        } catch (error) {
            console.log('Found error: ', error)
        } finally {
            setLoading(false);
        }
    }, [])

    return { loading, withLoading };
}

export default useLoading;

// Here's how a component would use this hook:
// import React from 'react';
// import useLoading from './useLoading';

// function ExampleComponent() {
//   const { isLoading, withLoading } = useLoading();

//   const handleLoadData = async () => {
//     await withLoading(async () => {
//       // Simulate an async operation
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       console.log('Data loaded');
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleLoadData} disabled={isLoading}>
//         {isLoading ? 'Loading...' : 'Load Data'}
//       </button>
//     </div>
//   );
// }

// export default ExampleComponent;