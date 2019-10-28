export function Addlist(title){
    return{
        type:"ADD_LIST",
        payload:title
    }
}

export function Resort(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
){
    return{
        type:"DRAG_HAPPENS",
        payload:{
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
}
