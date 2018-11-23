import React, { Component } from 'react';
import { Menu, Segment, Table } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category : {
        "ctf" : "CTF",
        "rock" : "락피킹",
        "room1" : "방탈출 1",
        "room2" : "방탈출 2",
        "blind" : "블라인드"
      },
      activeItem : "ctf",
    }
  }
  click = (id) => {
    this.setState({
      activeItem : id
    });
  }
  render() {
    const activeItem = this.state.activeItem;
    const category = [];
    Object.keys(this.state.category).forEach(c => {
      category.push((
        <Menu.Item
          name={this.state.category[c]}
          active={activeItem === c}
          onClick={() => {this.click(c)}}
        />
      ));
    });
    const rank = [];
    for(let i=0;i<20;i++) {
      let name = "장태진";
      let lastPhone = "8793";
      let time = "130";
      rank.push((
        <Table.Row textAlign="center">
          <Table.Cell>{i+1}</Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{lastPhone}</Table.Cell>
          <Table.Cell>{time} sec.</Table.Cell>
        </Table.Row>
      ));
    }
    return (
      <div>
        <div>
          <Menu attached='top' tabular>

            { category }

          </Menu>

          <Segment attached='bottom'>
            <Table>
              <Table.Header>
                <Table.Row textAlign="center">
                  <Table.HeaderCell width="100">#</Table.HeaderCell>
                  <Table.HeaderCell>이름</Table.HeaderCell>
                  <Table.HeaderCell>전화번호 뒷자리</Table.HeaderCell>
                  <Table.HeaderCell>Spend Time</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {rank}
              </Table.Body>
            </Table>
          </Segment>
        </div>
      </div>
    );
  }
}

export default App;
