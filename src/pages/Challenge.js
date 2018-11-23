import React, { Component } from 'react';
import { Table, Input, Button } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ranker = []
    for (let i = 0; i < 10; i++) {
      let name = "장태진";
      let lastPhone = "8793";
      let spendTime = "190";
      ranker.push((
        <Table.Row textAlign="center">
          <Table.Cell>{i + 1}위</Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{lastPhone}</Table.Cell>
          <Table.Cell>{spendTime} sec.</Table.Cell>
        </Table.Row>
      ));
    }
    return (
      <div>
        <div className="challengeBody">
          <h2>Prob 1. Find the key</h2>
          <div>
            URL : <a href="/" target="_blank">http://www.bughunting.net:8081</a>
          </div>
          <br />
          <div>
            Cupidatat ut reprehenderit proident adipisicing anim non fugiat ullamco ut culpa mollit tempor pariatur. Nulla quis aliquip laboris officia laboris cupidatat proident nostrud anim officia incididunt laboris nulla. Sint velit irure exercitation aliqua cupidatat duis ipsum id tempor nisi non nisi. In id ex deserunt deserunt dolore non cupidatat in fugiat eiusmod.<br />
            Do commodo Lorem voluptate enim do fugiat non velit adipisicing tempor cillum. Dolor reprehenderit laboris laboris do exercitation cupidatat. Cillum nulla ad anim cupidatat. Elit magna ea in duis officia amet. Elit commodo cillum est cupidatat aute ex Lorem pariatur. Quis aliqua adipisicing excepteur enim laborum sunt non.<br />
          </div>
          <br />
          <Input placeholder="bisc{...}" /> <Button basic color="green">AUTH</Button>
        </div>
        <div className="ranker">
          <h2># Ranker</h2>
          <Table>
            <Table.Header>
              <Table.Row textAlign="center">
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>이름</Table.HeaderCell>
                <Table.HeaderCell>전화번호 뒷자리</Table.HeaderCell>
                <Table.HeaderCell>Spend Time</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {ranker}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
