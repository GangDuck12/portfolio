import React,{ useState } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  console.log('App render');


  const [selected_content_id,setSelected_content_id] = useState();
  const [contents,setContents] = useState([
    {id:1, title:'Project', desc:'Login page To do list & Cafe Web Design'},
    {id:2, title:'Skills', desc:'Mainly used & Knowledgeable'},
    {id:3, title:'Interest', desc:'What I want to do...'},
    {id:4, title:'Contact', desc:'Thank you...'}
  ]);

  console.log('select_id',selected_content_id);

  // let content = <Home></Home>;
  // let content = <Project />;
    // let content =<Skills></Skills>;
    let content =<Interest></Interest>;

  if(selected_content_id === 0){
        content = <Home></Home>
      }else if(selected_content_id === 1){
        content = <Project></Project>
      }else if(selected_content_id === 2){
        content = <Skills></Skills>
      }else if(selected_content_id === 3){
        content = <Interest></Interest>
      }else if(selected_content_id === 4){
        content = <Contact></Contact>
      }

  let i = 0;
  while(i< contents.length){
    let data = contents[i];
    if(contents.id === selected_content_id){
      break;
    }

    i = i + 1;
  }

  console.log('content',content);
  return (
    <Router>
      <div className="App">
        <Header 
          data={contents} 
          onChangePage={function(id){
            setSelected_content_id(Number(id));
          }}
          onChangeMode={function(){
            setSelected_content_id(Number(0));
          }}
          ></Header>
        <div className="content">
          {content}
        </div>
      </div>
    </Router>
  );
}

export default App;
