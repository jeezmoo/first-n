/* eslint-disable */

import './App.css';
import React, {Component} from 'react';
import TOC from "./component/TOC"
import ReadContent from "./component/ReadContent"
import Subject from './component/Subject';
import Control from './component/Control';
import CreateContent from './component/CreateContent';


class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:2,
      subject:{title:"WEB", sub:"World wide web!"},
      welcome:{title:'Welcome', desc:'Hello, React!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit = {function(_title, _desc){
        console.log(_title, _desc)
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat(
          {id:TouchList.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          contents:_contents
          
        }
         
        )
      }.bind(this)}></CreateContent>
    }
    console.log('render', this);

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'})
          }.bind(this)}  
        >
        </Subject>  
        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          })
        }.bind(this)}
        data={this.state.contents}></TOC>

        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
        <div>
         <p>
           <input className='Input' 
           id="id" 
           name="id" 
           placeholder="아이디를 입력해주세요" />
         </p>
         <p>
           <input className='Input'
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          /></p>
          <p>
            <input type='submit' className='Button'></input>
          </p>
          
        </div>
      </div>
   
      
    );
  }
}

export default App;
