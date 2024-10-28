import React, { useState, useEffect } from 'react';

const useApi = (url: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                fetch(url)
                .then(res => res.json())
                .then(jsonData => {
                    setData(jsonData);
                })
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    return { data, error, loading };
}

export default useApi;

// Here's how a component would use this hook:
// function UserComponent() {
//     const { data, error, loading } = useApi(https://jsonplaceholder.typicode.com/users/1);
  
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;
  
//     return (
//       <div>
//         <h2>User Data</h2>
//         <p>Name: {data?.name}</p>
//         <p>Email: {data?.email}</p>
//       </div>
//     );
// }
  
// export default UserComponent;