export function AddCard(listid,text){
    console.log("addcard action invoked");
    return{
        type:'ADD_CARD',
        payload:{listid,text}
    }
}