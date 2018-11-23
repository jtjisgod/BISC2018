import React, { Component } from 'react';
const JEnum = require('../enum');

class App extends Component {
    constructor(props) {
        super(props);
        JEnum.axios.get(JEnum.logout)
        .then(() => {
            window.location.href = "/";
        })
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;
