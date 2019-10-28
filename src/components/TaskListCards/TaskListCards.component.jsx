import React from 'react';
import './TaskListCards.styles.css';
import TaskCards from '../TaskCards/TaskCards.component';
import AddButton from '../AddButton/addButton.component';
import { Droppable } from 'react-beautiful-dnd';

class TaskListCards extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isFormOpen : false
        }
    }
    
    render(){
    return (
        <Droppable droppableId={String(this.props.listid)}>
            {(provided)=>(

                <div {...provided.droppableProps} ref={provided.innerRef} className="list">
                    <div className="list-header">
                        <h5>{this.props.title}</h5>
                    </div>
                    {
                    this.props.cards.map((result,i)=><TaskCards key={i} index={i} text={result.text} id={result.id}/>)
                    }
                <AddButton listid={this.props.listid} style={{zIndex:1}}/>
                {provided.placeholder}
                </div>

            )}
        
        </Droppable>
    )
        }
}

export default TaskListCards;
