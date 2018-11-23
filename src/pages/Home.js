import React, { Component } from 'react';
import { Table, GridColumn, Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Grid columns="2">
          <GridColumn>
            <h1># 시간표</h1>
            <div>
              <Table style={{width:500}}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>TIME</Table.HeaderCell>
                    <Table.HeaderCell>EVENT</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>13:00 ~ 13:30</Table.Cell>
                    <Table.Cell>개회식</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>13:30 ~ 14:15</Table.Cell>
                    <Table.Cell><b>송상준</b> - 기술1 : Apple OSX(오에스텐) 취약점 분석</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>14:15 ~ 15:00</Table.Cell>
                    <Table.Cell><b>임준오</b> - 기술2 : BUG HUNTING</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>15:00 ~ 15:30</Table.Cell>
                    <Table.Cell>휴식 1</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>15:30 ~ 16:15</Table.Cell>
                    <Table.Cell><b>이찬우</b> - 진로1 : ICT 직무</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>16:15 ~ 17:00</Table.Cell>
                    <Table.Cell><b>안은희</b> - 진로2 : 스타트업</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>17:00 ~ 17:30</Table.Cell>
                    <Table.Cell>휴식 2</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>17:30 ~ 18:00</Table.Cell>
                    <Table.Cell><b>김동현</b> - IR Readiness</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>18:00 ~ 18:30</Table.Cell>
                    <Table.Cell><b>양승현</b> - 이더리움 구현체 취약점</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>18:30 ~ </Table.Cell>
                    <Table.Cell>BISC Award &amp; 폐회식, 네트워크 파티</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </GridColumn>
          <GridColumn>
            <h1># HOME</h1>
            <div>
              모든 정보들은 BISC 행사 이후 바로 삭제됩니다.<br/>
              해당 페이지에서는 모든 부스의 랭킹을 실시간으로 확인 할 수 있습니다.<br/>
              <br/>
              CTF는 매 쉬는 시간에 열리며, 쉬는시간마다 다른 문제로 열립니다.<br/>
              모든 문제를 가장 빠르게 푼 사람에게 상품을 지급합니다.<br/>
            </div>
            <h1># 실시간 공지</h1>
            <div>
              Fugiat occaecat qui aliqua aliquip culpa in Lorem. Ullamco pariatur reprehenderit proident in esse ullamco cillum. Laborum labore nostrud elit voluptate eu occaecat id reprehenderit. Anim exercitation amet velit fugiat minim eiusmod consectetur cupidatat labore eiusmod laboris fugiat do Lorem. Laborum anim dolor voluptate tempor cupidatat laboris anim ex anim aliquip irure.
              Ut nisi elit enim voluptate id cupidatat esse consequat exercitation reprehenderit. Consequat cupidatat nisi ullamco fugiat cillum officia nostrud exercitation cillum duis. Eu incididunt dolore ullamco ad magna excepteur laboris eu elit velit labore non elit eiusmod.
            </div>
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export default App;
