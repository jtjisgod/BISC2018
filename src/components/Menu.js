import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class App extends Component {
    handleItemClick = (e,{name}) => {
        if(name === 'home') {
            name = '';
        }
        window.location.href = "/" + name;
    }
    render() {
        const activeItem = window.location.pathname.split("/")[1];
        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        active={activeItem === ''}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='rank'
                        active={activeItem === 'rank'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Challenge'
                        active={activeItem === 'Challenge'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='Login'
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Logout'
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default App;
