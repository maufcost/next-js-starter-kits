import React from 'react';
import Counter from '@/components/Counter/Counter.tsx';
import ToolWrapper from '@/components/ToolWrapper/ToolWrapper';

const CounterPage = () => {
    return (
        <div>
            <ToolWrapper>
                <Counter />
            </ToolWrapper>
        </div>
    )
}

export default CounterPage