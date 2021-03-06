import React from 'react';
import App from './App';
import { ContextProvider, DataProvider } from './State';

function ISkan({data}) {

    return (
        <DataProvider data={data}>
            <ContextProvider data={data}>
                <App />
            </ContextProvider>
        </DataProvider>
    );

}

export default ISkan;