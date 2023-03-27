import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Title",
        author: "Author",
        genre: "Genre",
        length: "Length,",
        ISBN: "ISBN,",
        id: "ID,"
    },
    reducers: {
        // This settings the input from the form to the state.make
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
        chooseLength: (state, action) => { state.length = action.payload },
        chooseISBN: (state, action) => { state.ISBN = action.payload },
        chooseID: (state, action) => { state.ISBN = action.payload },
        
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseGenre, chooseLength, chooseISBN, chooseID } = rootSlice.actions