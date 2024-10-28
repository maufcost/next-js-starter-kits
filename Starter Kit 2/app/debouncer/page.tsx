import React from 'react';
import Debouncer from '@/components/Debouncer/Debouncer.tsx';
import ToolWrapper from '@/components/ToolWrapper/ToolWrapper';

const DebouncerPage = () => {
    return (
        <div>
            <ToolWrapper>
                <h3>This is debouncer! We built it by writing our own custom hook.</h3>
                <Debouncer />
            </ToolWrapper>
        </div>
    )
}

export default DebouncerPage