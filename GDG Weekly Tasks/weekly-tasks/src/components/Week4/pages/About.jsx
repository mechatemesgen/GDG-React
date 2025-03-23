import React from 'react';
import SubNav from '../SubNav';

function About() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <header className="mt-12 w-full text-center shadow-md">
                <SubNav />
            </header>

            <main className="flex flex-col items-center mt-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About</h1>
                <p className="text-lg text-gray-600 mb-6">
                    This application demonstrates the use of React Navigation and Context API.
                </p>
                <section className="w-full px-4">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">React Navigation</h2>
                    <p className="text-gray-600 mb-4">
                        React Navigation is a library used for routing and navigation in React applications. It allows you to create
                        navigable screens and manage transitions between them seamlessly.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Context API</h2>
                    <p className="text-gray-600">
                        The Context API is a feature in React that enables you to share state and data across components without
                        having to pass props manually at every level. It is particularly useful for managing global state in your
                        application.
                    </p>
                </section>
            </main>

            <footer className="bg-gray-800 text-white w-full py-4 text-center mt-auto">
                <p className="text-sm">© {new Date().getFullYear()} GDG Weekly Tasks. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;