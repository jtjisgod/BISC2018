import React, { Component } from 'react';
import { Table, Input, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
          <div className="login">
            <h1>BISC 회원가입</h1>
            <Table>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>NAME</Table.Cell>
                        <Table.Cell><Input fluid placeholder="성함"/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>PHONE</Table.Cell>
                        <Table.Cell><Input fluid placeholder="010-1234-4444"/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell style={{width:150}}>USERNAME</Table.Cell>
                        <Table.Cell><Input fluid placeholder="USERNAME"/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>PASSWORD</Table.Cell>
                        <Table.Cell><Input fluid placeholder="PASSWORD" type="password"/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>PASSWORD CHECK</Table.Cell>
                        <Table.Cell><Input fluid placeholder="PASSWORD" type="password"/></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button color="green" fluid style={{padding:20}}>회원가입</Button>
            <Button color="white" fluid style={{padding:20,marginTop:5}} onClick={() => { window.location.href="/Login"; }}>로그인</Button>
          </div>
      </div>
    );
  }
}

export default App;
