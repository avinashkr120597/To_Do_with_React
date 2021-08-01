import React from 'react'
import  Content  from './components/Content';
import  Sidebar from './components/Sidebar';
import Header  from './components/Header';

function App() {
  return (<>
  <center style><Header/>
  <Sidebar/>
    <Content/></center>
  
  </>);
}

export default App;
