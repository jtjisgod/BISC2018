import React, { Component } from 'react';
import { Menu, Segment, Table } from 'semantic-ui-react';
const JEnum = require('../enum');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category : [],
      activeItem : "ctf",
      rank : []
    }
    JEnum.axios.get(JEnum.events)
    .then(res => {
        if(res.data.status) {
          this.click('ctf')
          const a = [{code:"ctf",name:"CTF"}]
          res.data.data.forEach(e => {
            a.push(e);
          })
          this.setState({
              category : a
          })
        }
    })
  }
  click = (id) => {
    this.setState({
      activeItem : id
    });
    this.showRank(id);
  }
  showRank = (id) => {
    JEnum.axios.get(JEnum.rank + id)
    .then(res => {
      this.setState({
        rank : res.data
      })
    })
  }

  render() {
    const activeItem = this.state.activeItem;
    const category = [];
    this.state.category.forEach(c => {
      category.push((
        <Menu.Item
          name={c['name']}
          active={activeItem === c['code']}
          onClick={() => {this.click(c['code'])}}
        />
      ));
    });
    const rank = [];
    let i = 0;
    this.state.rank.forEach(e => {
      i += 1
      rank.push((
        <Table.Row textAlign="center">
          <Table.Cell>{i}</Table.Cell>
          <Table.Cell>{e.name}</Table.Cell>
          <Table.Cell>{e.phone}</Table.Cell>
          <Table.Cell>{e.time} sec.</Table.Cell>
        </Table.Row>
      ));
    })
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
                  <Table.HeaderCell>{this.state.activeItem === "ctf" ? "Score" : "Spend Time"}</Table.HeaderCell>
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
