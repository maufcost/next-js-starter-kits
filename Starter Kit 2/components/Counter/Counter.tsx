'use client';
import React from 'react';
import styles from './Counter.module.css';

const Counter = () => {
    const [count, setCount] = React.useState<number>(0);

    const onChange = (factor: number) => setCount(count + factor);

    return (
        <div>
            <h3>I'm a counter</h3>
            <p className={styles.count}>{count}</p>
            <button onClick={() => onChange(1)}>Add</button>
            <button onClick={() => onChange(-1)}>Subtract</button>
        </div>
    )
}

export default Counter