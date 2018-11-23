import React, { Component } from 'react';
import { Table, Input, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
          <div className="login">
            <h1>BISC 로그인</h1>
            <Table>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell style={{width:120}}>USERNAME</Table.Cell>
                        <Table.Cell><Input fluid placeholder="USERNAME"/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>PASSWORD</Table.Cell>
                        <Table.Cell><Input fluid placeholder="PASSWORD" type="password"/></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button color="green" fluid style={{padding:20}}>로그인</Button>
            <Button color="white" fluid style={{padding:20,marginTop:5}} onClick={() => { window.location.href="/Register"; }}>회원가입</Button>
          </div>
      </div>
    );
  }
}

export default App;
