import React, { Component } from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react';
const JEnum = require('../enum');

class App extends Component {
    state = {
        isAdmin : false
    }
    constructor(props) {
        super(props);
        JEnum.axios.get(JEnum.isAdmin)
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
                <div className="login">
                    <h1>BISC 관리자</h1>
                    <h5>부스 선택</h5>
                    <Dropdown placeholder='부스를 선택해주세요.' selection options={category} fluid/>
                    <h5>이름</h5>
                    <Input placeholder="이름" fluid/>
                    <h5>소모 시간 ( 초 )</h5>
                    <Input placeholder="몇초가 걸렸나요?" type="number" fluid/>
                    <h5>전화번호 ( 010-0000-0000 ) <span style={{color:'#ff0000'}}>Primary Key 이므로 절대 틀리면 안됨</span></h5>
                    <Input placeholder="010-1111-2222" fluid/>
                    <br/>
                    <Button color="green" fluid>등록하기</Button>
                </div>
            </div>
        );
    }
}

export default App;
