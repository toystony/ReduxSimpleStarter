//state argument is not application state,only the state the reducer is responsible for.
export default function(state = null, action){
    console.log('inside active_book_reducer');
    switch (action.type){
        case 'BOOK_SELECTED':
            console.log('inside switch case BOOK_SELECTED');
            return action.payload;
    }
    return state;
}