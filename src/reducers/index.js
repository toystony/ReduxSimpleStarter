import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './active_book_reducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
    books: BooksReducer,
    activeBook: ActiveBookReducer
});

export default rootReducer;
