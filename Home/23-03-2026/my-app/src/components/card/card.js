import React, { useState } from 'react';
import './card.module.css';

const Card = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else if (theme === 'dark') setTheme('solarized');
        else setTheme('light');
    };

    return (
        <div className={`app-container ${theme}`}>
            <div className="card">
                <h1>Текущая тема: {theme}</h1>
                <p>Нажми на кнопку, чтобы изменить оформление.</p>

                <button onClick={toggleTheme} className="theme-button">
                    Сменить тему
                </button>
            </div>
        </div>
    );
};

export default Card;