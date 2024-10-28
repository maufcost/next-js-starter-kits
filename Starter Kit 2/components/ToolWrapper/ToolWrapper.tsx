import React from 'react';
import Link from 'next/link';
import styles from './ToolWrapper.module.css';

interface ToolWrapperProps {
    children: React.ReactNode
}

const ToolWrapper:React.FC<ToolWrapperProps> = props => {
    return (
        <div>
            <Link href="/" className={styles.button}>
            👈 Go back to the main menu
            </Link>
            {props.children}
        </div>
    )
}

export default ToolWrapper