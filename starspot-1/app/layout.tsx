import React from 'react';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

const Layout = ({ children }) => {
    return (
        <SessionProvider>
            <div className="layout">
                <header>
                    <h1>StarSpot</h1>
                    <nav>
                        {/* Navigation links can be added here */}
                    </nav>
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