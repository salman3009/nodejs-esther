const initialState = {
         fullName:'akash'
  };

  function list(state = initialState, action){

      switch(action.type){
          case 'successList' : 
                    return {
                        fullName:"akash kumer"
                    }
           
            default:          
            return state;   
      }

  }

  export default list;