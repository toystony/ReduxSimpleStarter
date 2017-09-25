export function selectBook(book) {
    console.log('book has been selected', book.title);
    //selectBook is an action creator, it needs to return an action,
    //an object with a type property and payload.
    return {
        type : 'BOOK_SELECTED',
        payload: book
    };
}