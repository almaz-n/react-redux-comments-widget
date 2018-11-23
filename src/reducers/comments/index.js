
const initialState = {
    comments : []
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':  
            return { ...state,comments:[...state.comments]};  
        default: 
            return  state;   
                
    }
}

export default commentsReducer;