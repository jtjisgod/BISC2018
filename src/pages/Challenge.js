import React, { Component } from 'react';
import { Table, Input, Button } from 'semantic-ui-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 const JEnum = require('../enum');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "probs" : [],
      "flag" : {}
    }
    JEnum.axios.get(JEnum.Probs)
    .then((res) => {
      this.setState({
        probs : res.data
      })
    })
  }
  auth(id) {
    JEnum.axios.post(JEnum.auth, {
      prob : id,
      flag : this.state.flag[id]
    })
    .then(res => {
      if(!res.data.status) {
        alert(res.data.message);
        return;
      }
      alert("축하드립니다.");
      return;
    })
  }
  render() {
    const Challenges = []
    this.state.probs.forEach(prob => {
      Challenges.push((
        <div className="challengeBody">
          <h2>{prob.title}</h2>
          <br />
          <div>
          {ReactHtmlParser(prob.body)}
          </div>
          <br />
          <Input placeholder="bisc{...}" onChange={(e) => {
            let flag = this.state.flag;
            flag[prob._id] = e.target.value;
            this.setState({
              flag : flag
            })}
          }/> <Button basic color="green" onClick={() => { this.auth(prob._id) }}>AUTH</Button>
        </div>
      ))
    })
    return (
      <div>
        {Challenges}
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;
