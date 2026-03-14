import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
    }));
  }

  render() {
    return (
      <div className={`app-wrapper ${this.state.theme}`}>
        <Header
          theme={this.state.theme}
          toggleTheme={this.toggleTheme}
        />
        <Main theme={this.state.theme} />
      </div>
    );
  }
}

export default App;