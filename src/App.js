import React,{ useState } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  console.log('App render');


  const [selected_content_id,setSelected_content_id] = useState();
  const [contents,setContents] = useState([
    {id:1, title:'About', desc:'Me and Portfolio'},
    {id:2, title:'Project', desc:'3 personal project'},
    {id:3, title:'Skills', desc:'Mainly used & Knowledgeable'},
    {id:4, title:'Contact', desc:'Thank you...'}
  ]);

  console.log('select_id',selected_content_id);

  let content = <Home></Home>;
  // let content =<About></About>;
  // let content = <Project />;
    // let content =<Skills></Skills>;
    // let content =<Contact></Contact>;

  if(selected_content_id === 0){
        content = <Home></Home>
      }else if(selected_content_id === 1){
        content = <About></About>
      }else if(selected_content_id === 2){
        content = <Project></Project>
      }else if(selected_content_id === 3){
        content = <Skills></Skills>
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
  );
}

export default App;
