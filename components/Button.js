import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    const { text, onClick } = props;
    return (
        <button
            className={styles.mainButton}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button