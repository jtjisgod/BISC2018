import React, { Component } from 'react';
import { Input, Button, Dropdown, TextArea, GridRow } from 'semantic-ui-react';
const JEnum = require('../enum');

class App extends Component {
    state = {
        isAdmin : false
    }
    constructor(props) {
        super(props);
        JEnum.axios.get(JEnum.isJadmin)
        .then(res => {
            if(!res.data.status) {
                window.location.href = "/";
                return;
            }
            this.setState({
                isAdmin : true
            })
        })
    }
    render() {
        if(!this.state.isAdmin) {
            return (<div></div>);
        }
        const category = [
            {
                text: '락피킹',
                value: 'lock'
            },
            {
                text: '방탈출 1',
                value: 'room1'
            },
            {
                text: '방탈출 2',
                value: 'room2'
            },
            {
                text: '블라인드',
                value: 'blind'
            },
        ];
        return (
            <div>
                <h1>>> Jadmin 관리자</h1>
                <h2># CTF문제 열고 닫기</h2>
                <div className="ctfProps">
                    <div>Find the key on the bitmap</div>
                    <div>Find the key on the bitmap</div>
                    <div>Find the key on the bitmap</div>
                    <div>Find the key on the bitmap</div>
                </div>
                <table width="100%" >
                    <tbody>
                        <tr style={{verticalAlign:"top"}}>
                            <td>
                                <h2># 부스 관련</h2>
                                
                                <h3>## 부스 삭제</h3>
                                <h5>- 부스를 선택하여 삭제해주세요.</h5>
                                <Dropdown placeholder='부스를 선택해주세요.' selection options={category} fluid/>
                                <Button color="red" fluid style={{marginTop:5}}>부스 삭제</Button>

                                <h3>## 부스 생성</h3>
                                <h5>- 부스 이름을 적어주세요.</h5>
                                <Input type="text" placeholder="부스 이름" fluid/>
                                <h5>- 부스의 고유한 코드를 적어주세요.</h5>
                                <Input type="text" placeholder="부스 코드" fluid style={{marginTop:5}}/>
                                <Button color="blue" fluid style={{marginTop:5}}>부스 생성</Button>
                            </td>
                            <td>
                                <h2># CTF 관련</h2>
                        
                                <h3>## CTF 문제 수정/삭제</h3>
                                <h5>- 문제를 선택해주세요.</h5>
                                <Dropdown placeholder='문제를 선택해주세요.' selection options={category} fluid/>
                                <div>
                                    <Input type="text" placeholder="문제 이름" fluid style={{marginTop:5}}/>
                                    <Input type="text" placeholder="문제 코드" fluid style={{marginTop:5}}/>
                                    <TextArea placeholder="문제 코드" style={{marginTop:5,width:'100%',padding:10,height:400}}/>
                                    <Button color="green" fluid style={{marginTop:5}}>문제 수정</Button>
                                    <Button color="red" fluid style={{marginTop:5}}>문제 삭제</Button>
                                </div>

                                <h5>문제 생성</h5>
                                <Input type="text" placeholder="문제 이름" fluid/>
                                <Input type="text" placeholder="문제 코드" fluid style={{marginTop:5}}/>
                                <TextArea placeholder="문제 코드" style={{marginTop:5,width:'100%',padding:10,height:400}}/>
                                <Button color="blue" fluid style={{marginTop:5}}>부스 생성</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
