import React, { Component } from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react';
const JEnum = require('../enum');

class App extends Component {
    state = {
        isAdmin : false,
        category : [],
        phone : "",
        selected : "",
        name : "",
        time : ""
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
        JEnum.axios.get(JEnum.events)
        .then(res => {
            if(res.data.status) {
                this.setState({
                    category : res.data.data
                })
            }
        })        
    }
    submit = () => {
        if(!window.confirm("등록하시겠습니까?")) {
            return;
        }
        JEnum.axios.post(JEnum.eventsReport, {
            phone : this.state.phone,
            category : this.state.selected,
            name : this.state.name,
            time : this.state.time
        })
        .then(res => {
            if(res.data.status) {
                alert("Success");
                window.location.reload();
                return;
            }
            alert(res.data.message);
            return;
        })        
        
    }
    render() {
        if(!this.state.isAdmin) {
            return (<div></div>);
        }
        const category = [];
        this.state.category.forEach(element => {
            category.push({
                value : element.code,
                text : element.name
            })
        });    
        return (
            <div>
                <div className="login">
                    <h1>BISC 관리자</h1>
                    <h5>부스 선택</h5>
                    <Dropdown placeholder='부스를 선택해주세요.' selection options={category} fluid onChange={(e, {value})=>{this.setState({selected:value})}}/>
                    <h5>이름</h5>
                    <Input placeholder="이름" fluid onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    <h5>소모 시간 ( 초 )</h5>
                    <Input placeholder="몇초가 걸렸나요?" type="number" fluid onChange={(e)=>{this.setState({time:e.target.value})}}/>
                    <h5>전화번호 ( 010-0000-0000 ) <span style={{color:'#ff0000'}}>Primary Key 이므로 절대 틀리면 안됨</span></h5>
                    <Input placeholder="010-1111-2222" fluid onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                    <br/>
                    <Button color="green" fluid onClick={this.submit}>등록하기</Button>
                </div>
            </div>
        );
    }
}

export default App;
