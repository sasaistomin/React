import React from 'react';

export class Main extends React.Component {
    render() {
        const { theme } = this.props; 
        return (
            <div className={`main-container ${theme}`}>
                <div className="sidebar">
                </div>
                <div className="content">
                    <p>Текст какой-то</p>
                </div>
            </div>
        );
    }
}