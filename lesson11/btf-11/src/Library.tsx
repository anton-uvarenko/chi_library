import React from "react";
import {Book, book} from "./Book";

type LibraryProps = {
    books: book[];
}

const Library: React.FC<LibraryProps> = (books) => {
    return (
        <>
            {books.books.map((book, index) => {
                return <Book key={index} name={book.name} author={book.author} />
            })}
        </>
    )
}

export default Library;