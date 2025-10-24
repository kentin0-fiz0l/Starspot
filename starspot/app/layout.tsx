import React from 'react';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import AuthHeader from './components/AuthHeader'

const Layout = ({ children }) => {
    return (
        <SessionProvider>
            <div className="layout">
                <header>
                    <h1>StarSpot</h1>
                    <AuthHeader />
                </header>
                <main>{children}</main>
                <footer>
                    <p>&copy; {new Date().getFullYear()} StarSpot. All rights reserved.</p>
                </footer>
            </div>
        </SessionProvider>
    );
};

export default Layout;