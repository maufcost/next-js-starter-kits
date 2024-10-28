'use client'
import React from 'react';
import { people } from './people';
import styles from './Filter.module.css';

const Filter = () => {
    const [data, setData] = React.useState(people);
    const [query, setQuery] = React.useState<string>('');

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
    }

    const filteredData = data.filter(person => {
        const lowercaseQuery = query.toLowerCase();

        return person.firstName.toLowerCase().startsWith(lowercaseQuery) ||
            person.lastName.toLowerCase().startsWith(lowercaseQuery);
    })

    const renderEmployees = () => {
        if (filteredData.length === 0) {
            return <p>No matches were found!</p>
        }

        return (
            <div className={styles.list}>
                {filteredData.map((p, i) => {
                    return (
                        <div key={i} className={styles.employee}>
                            <p>{p.firstName}</p>
                            <p>{p.lastName}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <div>
                <h3>Who are you looking for?</h3>
                <input
                    type="text"
                    placeholder="Search employees here"
                    value={query}
                    onChange={handleQueryChange}
                    className={styles.input}
                />
            </div>
            <div>
                <h3>Employee List</h3>
                {renderEmployees()}
            </div>
        </div>
    )
}

export default Filter