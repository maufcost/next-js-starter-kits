import React from 'react';
import Main from '@/components/Main';
import Dashboard from '@/components/Dashboard';

// Setting a metadata only works on server components
export const metadata = {
    title: 'A Next App · Dashboard'
}

const DashboardPage = () => {
    return (
        <Main>
            <Dashboard />
        </Main>
    )
}

export default DashboardPage