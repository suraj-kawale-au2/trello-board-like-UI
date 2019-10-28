let listId = 2;
let CardId = 4;
const intialState = [
    {
        taskTitle:"Pending",
        id: `list-${0}`,
        cards :[
            {
                id: `card-${0}`,
                text:"Creating cards area first"
            },
            {
                id: `card-${1}`,
                text:"Styling card area"
            }
        ]
    },
    {
        taskTitle:"Work In Progress",
        id: `list-${1}`,
        cards : [
            {
                id: `card-${2}`,
                text:"Styling of app"
            },
            {
                id: `card-${3}`,
                text:"Creating store and reducers"
            }
        ]

    }
]

function TaskReducer(state = intialState,action){
    switch(action.type){
        case "ADD_LIST":
            const newList = {
                taskTitle:action.payload,
                cards:[],
                id: `list-${listId}`
            }
            const listnewState = state.concat(newList);
            listId += 1
            return listnewState;
        case "ADD_CARD":
            console.log("add card reducer invoked")
            const newCard = {
                id: `card-${CardId}`,
                text:action.payload.text
            }
            console.log(newCard, action.payload)
            CardId += 1;
         const newState = state.map(list=>{
             if(list.id === action.payload.listid){
                 return {
                     ...list,
                     cards:[...list.cards,newCard]
                 }
             }else{
                 return list;
             }
         });
         console.log(newState);

         return newState;
         case "DRAG_HAPPENS":{

            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
              } = action.payload;
             const newState = [...state];
             if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
             }
                const listStart = state.find(list => droppableIdStart === list.id);
                const card = listStart.cards.splice(droppableIndexStart, 1);
                const listEnd = state.find(list => droppableIdEnd === list.id);
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
              

             return newState;
        
         }
        default:
          return state;
    }
}

export default TaskReducer;