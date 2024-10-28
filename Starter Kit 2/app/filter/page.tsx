import React from 'react';
import Link from 'next/link';
import Filter from '@/components/Filter/Filter.tsx';
import ToolWrapper from '@/components/ToolWrapper/ToolWrapper';

const FilterPage = () => {
    return (
        <div>
            <ToolWrapper>
                <Filter />
            </ToolWrapper>
        </div>
    )
}

export default FilterPage