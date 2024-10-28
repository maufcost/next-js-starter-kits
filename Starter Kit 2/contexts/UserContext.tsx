
import React, { useState, createContext } from 'react';

// Creating the context
const UserContext = createContext({});

interface UserProviderProps {
    children: React.ReactNode
}

export const UserProvider:React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState({ name: 'Mauricio Costa', age: 25 });

    const value = {
        user, setUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </ UserContext.Provider>
    )
}

export default UserContext;

// Here's how a component would access this context:
// import React, { useContext } from 'react';
// import UserContext from './UserContext';

// function Child() {
//   const { user, setUser } = useContext(UserContext);

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>User: {user.name}, Age: {user.age}</p>
//       <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
//         Increase Age
//       </button>
//     </div>
//   );
// }