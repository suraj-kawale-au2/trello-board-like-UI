import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function TaskCards({text,id,index}) {
    return (
        <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div className="card mx-auto mb-1" style={{maxWidth:"18rem"}}>
                <div className="card-body">
                    <p>{text}</p> 
                </div>
            </div>
            </div>
        )}
        
        </Draggable>
    )
}

export default TaskCards;
