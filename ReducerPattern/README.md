const [state,Dispatcher]=useReduce(reducer,initialState)
state<-element subscrib 
event -> dispatch with (action and payload) 
reducer is pure function no outsider is required get state do change return new object

# use reduce counter {count:0};
function reducer(state,action){
  switch(action.type){
    case "inc":
    // you have to return new objecdt as it is work on pure function cocepts 
    // or use structuredClone or JSON.parse(JSON.stringify()) or deepCopy
    return {count:action.paylaod??0+state.count+1}
    break;
    case "dec"
    return {count:action.paylaod??0+state.count-1}
    break;
    case "reset"
    return {count:0}
    break;
    deafault:
      return state;
  }
}

(wabi sabi)
