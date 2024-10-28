'use client';
import React from 'react';

const NextAPICaller = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const ROUTE = '/api';

    const  handleClickWithAsync = async () => {
        try {
            setLoading(true);

            const response = await fetch(ROUTE, {
                headers: {
                    Accept: "application/json",
                    method: "GET",
                }
            });

            if (response) {
                const jsonData = await response.json();
                console.log("data:");
                console.log(jsonData);
                setData(jsonData);
            }

        } catch (err: any) {
            console.log('Error while fetching from API:');
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    const  handleClickWithPromises = () => {
        setLoading(true);

        fetch(ROUTE)
        .then(response => response.json())
        .then(jsonData => {
            console.log("Data:");
            console.log(jsonData);
            setData(jsonData);
        })
        .catch(err => {
            console.log('Error while fetching from API:');
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    const handleClickSlowly = async () => {
        setLoading(true);

        await new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, 4000);
        })

        fetch(ROUTE)
        .then(response => response.json())
        .then(jsonData => {
            console.log("Data:");
            console.log(jsonData);
            setData(jsonData);
        })
        .catch(err => {
            console.log('Error while fetching from API:');
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return (
        <div>
            {loading && <p>Loading...</p>}
            <button onClick={handleClickWithAsync}>
                Call my Next.JS API with async/await
            </button>
            <button onClick={handleClickWithPromises}>
                Call my Next.JS API with promises
            </button>
            <button onClick={handleClickSlowly}>
                Call my really slow Next.JS API
            </button>
            {error && <p>We've run into an error</p>}
            {data && <p><b>Response: </b>{JSON.stringify(data)}</p>}
        </div>
    )
}

export default NextAPICaller