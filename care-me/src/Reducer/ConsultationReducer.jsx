export const reducer=(state,action)=>{
    switch(action.type){
        case "FETCH_REQUEST":{
            return{
                "loading": true,
                "data": [],
                "error": false
              }
        }
        case "FETCH_SUCCESS":{
            return{
                "loading": false,
                "data": action.payload,
                "error": false
              }
        }
        case "FETCH_FAILURE":{
            return{
                "loading": false,
                "data": [],
                "error": true
              }
        }
        default: {
            throw new Error('Invalid action Type')
        }
    }
}

export const initialState = {
    "loading": false,
    "data": [],
    "error": false
  };