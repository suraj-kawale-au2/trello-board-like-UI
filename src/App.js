import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import BoardPage from './components/boardPage/boardPage.component';
import { MDBRow, MDBCol } from "mdbreact";
import BoardHeader from './components/boardHeader/boardHeader.component';
import SideMenuModal from './components/sideMenuModal/sideMenuModal.component';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
       IsSideMenuVisible : false,
       modal: false
    }
    // this.handleClick = this.handleClick.bind(this);
    this.Handletoggle = this.Handletoggle.bind(this);
  }
  
  // handleClick(){
  //    this.setState(state => ({
  //      IsSideMenuVisible : !state.IsSideMenuVisible
  //     }));
  // }
  
  Handletoggle(){
    this.setState(state => ({
      modal: !state.modal
    }));
  }

  render(){
  return (
    <div className="App">
      <Header/>
      <div style={{marginTop:"4rem"}}>
        <BoardHeader Handletoggle={()=>this.Handletoggle}/>
          
          <MDBRow>

            <MDBCol md="12"><BoardPage/></MDBCol>
            
          </MDBRow>
          
          <SideMenuModal isOpen={this.state.modal} Handletoggle={()=>this.Handletoggle}/>
     
      </div>
      
    </div>
  );
  }
}

export default App;
