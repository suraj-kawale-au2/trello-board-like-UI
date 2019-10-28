import React from 'react';
import {connect} from 'react-redux';
import './boardPage.styles.css';
import TaskListCards from '../TaskListCards/TaskListCards.component';
import AddButton from '../AddButton/addButton.component';
import { DragDropContext } from 'react-beautiful-dnd';
import { Resort } from '../../actions/listAddAction'


class BoardPage extends React.Component{
    
    onDragEnd = (result) => {
        //reodering logic
        const {destination,source,draggableId} = result;
        if(!destination){
            return;
        }

        this.props.dispatch(
            Resort(
              source.droppableId,
              destination.droppableId,
              source.index,
              destination.index,
              draggableId
            )
          );
    }
    
    render(){
    console.log("BoardPage component props",this.props)
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="board">
                {
                    this.props.tasklists.map((result,i)=><TaskListCards listid={result.id} key={i} title={result.taskTitle} cards={result.cards}/>)
                }
                <div className="card bg-transparent" style={{height:"100%",minWidth:"18rem"}}>
                    <AddButton list/>
                </div>
            </div>
        </DragDropContext>
    )
    }
}

function mapStateToProps(state){
   console.log("BoardPage state",state);
   return{
       tasklists : state.TaskReducer
   }
}
export default connect(mapStateToProps)(BoardPage);
