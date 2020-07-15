import React, {Suspense} from 'react';
import {useTranslation} from 'react-i18next';
import logo from './logo.svg';
import './App.css';

function Page() {

    const {t} = useTranslation();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {t('description.part1')}
                </p>
                <h1>{t('title')}</h1>
            </header>
        </div>
    );
}

const Loader = () => (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        <div>Loading...</div>
    </div>
);

export default function App() {
    return (
        <Suspense fallback={<Loader/>}>
            <Page/>
        </Suspense>
    );
}
