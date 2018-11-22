
const initialState = {
    comments : [
        {
            id: 1,
            author: '',
            comment: '',
            date: ''
        }
    ]
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {

        default: 
            return  state;   
                
    }
}

export default commentsReducer;