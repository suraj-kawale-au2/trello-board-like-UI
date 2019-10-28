import React from 'react';
import { MDBIcon, MDBBtn } from 'mdbreact';
import Textarea from 'react-textarea-autosize';
import { connect } from "react-redux";
import { AddCard } from "../../actions/cardAddActions";
import { Addlist } from "../../actions/listAddAction";

class AddButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isFormOpen : false
        }
    }
    
    openForms=()=>{
        this.setState(state=>({
            isFormOpen : !state.isFormOpen
        }))
    }

    handleInputChange=e=>{
           this.setState({
               text:e.target.value
           })
    }

    handleAddCard = () => {
        const { dispatch, listid } = this.props;
        const { text } = this.state;
        console.log("add button props",this.props)
        if (text) {
          this.setState({
            text: ""
          });
          dispatch(AddCard(listid, text));
        }
      };

      handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
    
        if (text) {
          this.setState({
            text: ""
          });
          dispatch(Addlist(text));
        }
    
        return;
      };
    
    renderButton=()=>{
        const { list } = this.props;
        const text = list ? "Add another list":"Add another card";
        const classes = list ? "btn btn-lg btn-transparent text-white shadow-sm":"btn btn-block btn-light text-secondary"
    return (
        <MDBBtn className={classes} onClick={this.openForms}>
            <MDBIcon icon="plus" /> &nbsp;
             {text}
        </MDBBtn>
    )
    }

    renderForm=()=>{
        const { list } = this.props;
        const placeholder = list? "Enter new List" : "Enter new card";
        const buttontxt = list?"ADD LIST":"ADD CARD";
        return(
            <div>
            <div className="card mb-1" style={{
                minHeight:50}}>
                <Textarea 
                placeholder={placeholder}
                autoFocus
                onBlur={this.openForms}
                onChange={this.handleInputChange}
                style={{
                    resize:"none",
                    width:"100%",
                    outline:"none",
                    overflow:"hidden",
                    border:"none",
                }}
                />
                
            </div>
                <MDBBtn className="btn btn-md btn-success mr-1" onMouseDown={list ? this.handleAddList : this.handleAddCard}>
                    {buttontxt}
                </MDBBtn>
                <MDBBtn className="btn btn-transparent text-muted shadow-sm" onClick={this.openForms}>
                    <MDBIcon icon="times"></MDBIcon>
                </MDBBtn>
            </div>
        )
    }

    render(){
    return this.state.isFormOpen?this.renderForm():this.renderButton()
    }
}

export default connect()(AddButton);