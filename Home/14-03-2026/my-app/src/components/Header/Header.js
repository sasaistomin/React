import React from "react";
import styles from './Header.module.css';

export class Header extends React.Component {
    render() {
        const { theme, toggleTheme } = this.props;

        return (
            <header className={styles.headerStyle}>
                <h1>V-Mart</h1>
                <nav className={styles.navHeaderStyle}>
                    <a href="#main">Main</a>
                    <a href="#contacts">Contacts</a>
                    
                    <button 
                        onClick={toggleTheme} 
                        className={styles[theme === 'light' ? 'Light' : 'Dark']}
                    >
                        {theme === 'light' ? 'Light' : 'Dark'}
                    </button>
                </nav>
            </header>
        );
    }
}