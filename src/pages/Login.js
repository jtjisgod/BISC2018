import React, { Component } from 'react';
import { Table, Input, Button } from 'semantic-ui-react';
const JEnum = require('../enum');

class App extends Component {
    state = {
        username : "",
        password : ""
    }
    login = () => {
        JEnum.axios.post(JEnum.login, {
            username : this.state.username,
            password : this.state.password
        })
        .then(res => {
            if(res.data.status) {
                window.location.href = "/";
                return;
            }
            alert(res.data.message);
        })
    }
    render() {
        return (
            <div>
                <div className="login">
                    <h1>BISC 로그인</h1>
                    <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell style={{ width: 120 }}>USERNAME</Table.Cell>
                                <Table.Cell><Input fluid placeholder="USERNAME" onChange={(e)=>{this.setState({username:e.target.value})}}/></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>PASSWORD</Table.Cell>
                                <Table.Cell><Input fluid placeholder="PASSWORD" type="password"  onChange={(e)=>{this.setState({password:e.target.value})}}/></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button color="green" fluid style={{ padding: 20 }} onClick={this.login}>로그인</Button>
                    <Button color="white" fluid style={{ padding: 20, marginTop: 5 }} onClick={() => { window.location.href = "/Register"; }}>회원가입</Button>
                </div>
            </div>
        );
    }
}

export default App;
