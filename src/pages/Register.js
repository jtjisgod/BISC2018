import React, { Component } from 'react';
import { Table, Input, Button } from 'semantic-ui-react';
const JEnum = require('../enum');

class App extends Component {
    state = {
        fullname : "",
        phone : "",
        username : "",
        password : "",
        passwordChk :""
    }
    register = () => {
        if(this.state.password !== this.state.passwordChk) {
            alert("두 패스워드가 서로 다릅니다.");
            return;
        }
        JEnum.axios.post(JEnum.register, {
            fullname : this.state.fullname,
            phone : this.state.phone,
            username : this.state.username,
            password : this.state.password
        })
        .then(res => {
            if(!res.data.status) {
                alert(res.data.message);
                return;
            }
            window.location.href = "/Login";
        })
    }
    render() {
        return (
            <div>
                <div className="login">
                    <h1>BISC 회원가입</h1>
                    <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>NAME</Table.Cell>
                                <Table.Cell><Input fluid placeholder="성함" onChange={(e) => { this.setState({ fullname: e.target.value }) }} /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>PHONE</Table.Cell>
                                <Table.Cell><Input fluid placeholder="010-1234-4444" onChange={(e) => { this.setState({ phone: e.target.value }) }} /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{ width: 150 }}>USERNAME</Table.Cell>
                                <Table.Cell><Input fluid placeholder="USERNAME" onChange={(e) => { this.setState({ username: e.target.value }) }} /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>PASSWORD</Table.Cell>
                                <Table.Cell><Input fluid placeholder="PASSWORD" type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>PASSWORD CHECK</Table.Cell>
                                <Table.Cell><Input fluid placeholder="PASSWORD" type="password" onChange={(e) => { this.setState({ passwordChk: e.target.value }) }} /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button color="green" fluid style={{ padding: 20 }} onClick={this.register}>회원가입</Button>
                    <Button color="white" fluid style={{ padding: 20, marginTop: 5 }} onClick={() => { window.location.href = "/Login"; }}>로그인</Button>
                </div>
            </div>
        );
    }
}

export default App;
