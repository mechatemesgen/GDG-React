import React from 'react';
import { Link } from 'react-router-dom';
import { useState, createContext } from 'react';
import './WeekSix.css';

function WeekSix() {
    const ThemeContext = createContext();
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
            <section className={theme}>
                <div className='h-lvh mt-0'>
                <div className=''>
                    <h1 className='text-2xl text-center  font-bold'>Week Six</h1>
                    <h1 className='text-center font-bold'>Context API</h1>
                </div>
               
                <hr />
                <div className='cursor-pointer bg-gray-500/20 p-1 justify-self-end w-20 rounded-2xl m-2'>
                    <label className='cursor-pointer font-bold m-2' id="Theme" htmlFor="theme-toggle">{theme === 'light' ? 'Dark' : 'light'}</label>
                    <input
                        type="checkbox"
                        name="Theme"
                        id="theme-toggle"
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                </div>

                <div className='p-10 border-1 rounded-2xl m-5'>
                    <h1 className='text-center font-bold'>Light and Dark Mode</h1>
                    <p className='mt-5'>But how to save the user theme on the local device and how to make auto select based on the user device default theme? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi repudiandae delectus pariatur facilis? Culpa tempore id officiis praesentium doloremque modi, unde porro assumenda voluptate. Obcaecati laudantium maxime distinctio est.</p>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi repudiandae delectus pariatur facilis? Culpa tempore id officiis praesentium doloremque modi, unde porro assumenda voluptate. Obcaecati laudantium maxime distinctio est.</p>
                </div>

                </div>

            </section>
    );
}

export default WeekSix;